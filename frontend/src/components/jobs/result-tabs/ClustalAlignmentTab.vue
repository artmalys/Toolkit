<template>
    <Loading :message="$t('jobs.results.alignment.loadingHits')"
             v-if="loading || !alignments"/>
    <div v-else>
        <div class="result-options">
            <a @click="toggleAllSelected" :class="{active: allSelected}">
                {{$t('jobs.results.actions.selectAll')}}</a>
            <a @click="forwardSelected" :disabled="selected.length === 0">
                {{$t('jobs.results.actions.forwardSelected')}}</a>
            <a @click="downloadAlignment">
                {{$t('jobs.results.actions.downloadMSA')}}</a>
            <a :href="downloadFilePath" target="_blank">
                {{$t('jobs.results.actions.exportMSA')}}</a>
            <a @click="toggleColor" :class="{active: color}">
                {{$t('jobs.results.actions.colorMSA')}}</a>
        </div>

        <div class="alignment-results mb-4">
            <p v-html="$t('jobs.results.alignment.numSeqs', {num: total})"></p>
            <div class="table-responsive">
                <table>
                    <tbody>
                    <template v-for="(group, groupI) in brokenAlignments">
                        <tr v-for="elem in group"
                            :key="groupI + '-' + elem.num">
                            <td>
                                <b-form-checkbox :checked="selected.includes(elem.num)"
                                                 @change="selectedChanged(elem.num)"/>
                            </td>
                            <td class="accession">
                                <b v-text="elem.accession.slice(0, 20)"></b>
                            </td>
                            <td v-html="coloredSeq(elem.seq)"
                                class="sequence">
                            </td>
                        </tr>
                        <tr>
                            <td v-if="groupI === 0 && alignments.length !== total"
                                colspan="3">
                                <Loading :message="$t('jobs.results.alignment.loadingHits')"
                                         v-if="loadingMore"
                                         justify="center"
                                         class="mt-4"/>
                                <intersection-observer @intersect="intersected"/>
                            </td>
                        </tr>

                        <tr class="blank-row"
                            v-if="groupI < brokenAlignments.length - 1">
                            <td colspan="3"></td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import mixins from 'vue-typed-mixins';
    import ResultTabMixin from '@/mixins/ResultTabMixin';
    import {AlignmentItem, AlignmentResultResponse} from '@/types/toolkit/results';
    import Loading from '@/components/utils/Loading.vue';
    import {resultsService} from '@/services/ResultsService';
    import Logger from 'js-logger';
    import {colorSequence} from '@/util/SequenceUtils';
    import EventBus from '@/util/EventBus';
    import IntersectionObserver from '@/components/utils/IntersectionObserver.vue';

    const logger = Logger.get('ClustalAlignmentTab');

    export default mixins(ResultTabMixin).extend({
        name: 'ClustalAlignmentTab',
        components: {
            Loading,
            IntersectionObserver,
        },
        data() {
            return {
                alignments: undefined as AlignmentItem[] | undefined,
                selected: [] as number[],
                breakAfter: 85, // clustal format breaks after n chars
                color: false,
                loadingMore: false,
                perPage: 50,
                total: 0,
            };
        },
        computed: {
            allSelected(): boolean {
                if (!this.alignments) {
                    return false;
                }
                return this.alignments.length > 0 &&
                    this.selected.length === this.alignments.length;
            },
            brokenAlignments(): AlignmentItem[][] {
                if (!this.alignments) {
                    return [];
                }
                // alignments need to be broken into pieces
                const res: AlignmentItem[][] = [];
                for (const a of this.alignments) {
                    let breakIt = 0;
                    while (breakIt * this.breakAfter < a.seq.length) {
                        if (!res[breakIt]) {
                            res[breakIt] = [];
                        }
                        res[breakIt].push(Object.assign({}, a, {
                            seq: a.seq.slice(breakIt * this.breakAfter, (breakIt + 1) * this.breakAfter),
                        }));
                        breakIt++;
                    }
                }
                return res;
            },
            downloadFilePath(): string {
                return resultsService.getDownloadFilePath(this.job.jobID, 'alignment.clustalw_aln');
            },
        },
        methods: {
            async init() {
                await this.loadHits(0, this.perPage);
            },
            async intersected() {
                if (!this.loadingMore && this.alignments && this.alignments.length < this.total) {
                    this.loadingMore = true;
                    try {
                        await this.loadHits(this.alignments.length, this.alignments.length + this.perPage);
                    } catch (e) {
                        logger.error(e);
                    }
                    this.loadingMore = false;
                }
            },
            async loadHits(start: number, end: number) {
                const res: AlignmentResultResponse = await resultsService.fetchAlignmentResults(this.job.jobID, start, end);
                this.total = res.total;
                if (this.allSelected) {
                    res.alignments.forEach((a: AlignmentItem) => this.selected.push(a.num));
                }
                if (!this.alignments) {
                    this.alignments = res.alignments;
                } else {
                    this.alignments.push(...res.alignments);
                }
            },
            toggleColor(): void {
                this.color = !this.color;
            },
            selectedChanged(num: number): void {
                if (this.selected.includes(num)) {
                    this.selected = this.selected.filter((n: number) => num !== n);
                } else {
                    this.selected.push(num);
                }
            },
            toggleAllSelected(): void {
                if (!this.alignments) {
                    return;
                }
                if (this.allSelected) {
                    this.selected = [];
                } else {
                    this.selected = this.alignments.map((al: AlignmentItem) => al.num);
                }
            },
            coloredSeq(seq: string): string {
                if (this.color) {
                    return colorSequence(seq);
                } else {
                    return seq;
                }
            },
            downloadAlignment(): void {
                const downloadFilename = `${this.tool.name}_alignment_${this.job.jobID}.clustal`;
                resultsService.downloadFile(this.job.jobID, 'alignment.clustalw_aln', downloadFilename)
                    .catch((e) => {
                        logger.error(e);
                    });
            },
            forwardSelected(): void {
                if (this.selected.length > 0) {
                    if (this.tool.parameters && this.alignments) {
                        const selAl: AlignmentItem[] = this.alignments
                            .filter((al: AlignmentItem) => this.selected.includes(al.num));
                        EventBus.$emit('show-modal', {
                            id: 'forwardingModal', props: {
                                forwardingJobID: this.job.jobID,
                                forwardingData: selAl.reduce((acc: string, cur: AlignmentItem) =>
                                    acc + '>' + cur.accession + '\n' + cur.seq + '\n', ''),
                                forwardingMode: this.tool.parameters.forwarding,
                            },
                        });
                    } else {
                        logger.error('tool parameters not loaded. Cannot forward');
                    }
                }
            },
        },
    });
</script>

<style lang="scss" scoped>
    .alignment-results {
        font-size: 0.9em;

        td {
            padding: 0 2rem 0 0;
        }

        .blank-row td {
            height: 2.5rem;
        }

        .accession {
            font-size: 0.9em;
        }

        .sequence {
            font-family: $font-family-monospace;
            letter-spacing: 0.025em;
            font-size: 0.75rem;
            white-space: pre;
        }
    }
</style>