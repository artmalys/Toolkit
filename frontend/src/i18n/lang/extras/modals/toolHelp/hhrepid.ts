/* tslint:disable:max-line-length */

export default {
    en: {
        toolHelpModals: {
            hhrepid: {
                overview: `<p>HHrepID is a novel automated procedure for the de novo identification of repeats in protein sequences. It is
            able to detect the sequence signature of structural repeats in many proteins that have not yet been known
            to possess internal sequence symmetry, such as TIM barrels and outer membrane beta-barrels. HHrepID uses
            HMM-HMM comparison to exploit evolutionary information in the form of the multiple sequence alignment of
            homologs, but in contrast to HHrep, the new method has several novel characteristics: (1) automated
            generation of a multiple alignment of repeats; (2) utilization of the transitive nature of homology through
            a novel merging procedure based on the fully probabilistic treatment of alignments; (3) superior alignment
            quality through an algorithm that maximizes the expected accuracy of an alignment; (4) the ability to
            identify different repeats within complicated architectures or multiple domains through automatic domain
            boundary detection, (5) new statistical treatment yielding improved sensitivity.</p>
        <h5><b>Length of submitted sequences</b></h5>
        <p>HHrepID works best on single-domain sequences or sequences containing only one kind of tandem repeat.
            If you don't know where your domains are, perform an HHpred search through SCOP and PfamA. Also, you could
            perform a preliminary HHrepID analysis to home in on the repeat regions and then cut the sequence further
            down to include only regions with one kind of repeat structure. Sequences should best have between 100 and
            300 residues length. Sequences that are too short will gather too few homologs in the sequences searches,
            thus loosing sensitivity. Also, the more repeat units are contained in a sequence, the more information
            from transitivity of pairwise alignments (A-B, B-C => A-C) can be used by HHrepID through its
            "Merge alignments" functionality.
        <h5><b>Submitting an alignment</b></h5>
        <p>If you already have a trustworthy multiple sequence alignment of your query with some homologs it is
            recommended that you start with this instead of from a single sequence.</p>
        <h5><b>Why is HHrepID so sensitive?</b></h5>
        <p>The reason for HHrepID's sensitivity lies in the use of evolutionary information when comparing the query
            sequence with itself. This evolutionary information comes from the multiple sequence alignment of
            the sequence with homologous stretches of proteins. The information in the multiple sequence alignment
            is used in a condensed form, a profile HMM. A profile HMM is almost the same as a sequence profile. This
            in turn is just a table with 20 rows and L columns (where L is the length of the query protein). Each of
            the L columns contains the frequencies of the 20 amino acids in the corresponding column of the multiple
            sequence alignment. This table is then compared with itself in order to find stretches of columns with
            similar amino acid distributions. By looking at many related sequences with very similar structures that
            contribute to the sequence profile, profile-profile (or HMM-HMM) comparison effectively averages away those
            features of the sequence that are there just by chance and not by necessity and concentrates on those that
            determine the protein family's properties.</p>
        <p>A method that also employs HMM-HMM comparison for very sensitive protein-protein comparison is implemented
            in HHpred, our interactive function and structure prediction server.</p>`,
                parameters: [
                    {
                        title: 'Input',
                        content: `You have the option to enter or upload either a single protein sequence or a multiple sequence
                    alignment (MSA) in FASTA, CLUSTAL, or A3M format.<br/><br/>
                @:toolHelpModals.common.singleseq
                @:toolHelpModals.common.msa
                @:toolHelpModals.common.a3m`,
                    },
                    {
                        title: 'Maximal no. of MSA generation steps',
                        content: `This specifies the number of PSI-BLAST iterations that are performed to build up an alignment from
                    the input sequence or input alignment.
                    The iterations stop in any case when no further sequences are found.
                    If you want to use exactly your input alignment, choose 0 here.
                    This will ensure that only predicted secondary structure is added to your input alignment.`,
                    },
                    {
                        title: 'Score secondary structure',
                        content: `If you choose "yes", the secondary structure of the query will be predicted with
                    <a href = https://www.ncbi.nlm.nih.gov/pubmed/10493868?dopt=Abstract target="_blank" rel="noopener">PSIPRED</a>
                    and a secondary structure similarity score is added to the total score.
                    Scoring the secondary structure similarity improves sensitivity and also alignment quality significantly.
                    Since the weight of the secondary structure score is small (12% of the amino acid similarity score),
                    the risk for high-scoring non-homologous matches is still small.`,
                    },
                    {
                        title: 'Repeat family P-value threshold',
                        content: `The statistical significance threshold for including a repeat family in the repeat detection results.`,
                    },
                    {
                        title: 'Self-alignment P-value threshold',
                        content: `The statistical significance threshold for including a suboptimal self-alignment in the total poster probability matrix.`,
                    },
                    {
                        title: 'Merge rounds',
                        content: `Number of merge iterations to be performed before repeat are extracted from the posterior probability matrix.`,
                    },
                    {
                        title: 'Domain boundary detection',
                        content: `Turn this option off if you are certain that your query contains only a single domain.`,
                    },
                ],
                references: `<p>Biegert A., Söding J. (2008) <b>HHrepID: de novo protein repeat identification by probabilistic
            consistency. </b>Bioinformatics 24(6):807-814.
            <a href = https://academic.oup.com/bioinformatics/article/24/6/807/194276/De-novo-identification-of-highly-diverged-protein target="_blank" rel="noopener">(download pdf)</a><br/>
            <a href = https://www.ncbi.nlm.nih.gov/pubmed/18245125 target="_blank" rel="noopener">PMID: 18245125</a></p>`,
            },
        },
    },
};
