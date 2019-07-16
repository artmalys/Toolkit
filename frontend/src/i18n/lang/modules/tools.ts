export default {
    header: 'Tools',
    sections: {
        'search': {
            title: 'Search',
        },
        'alignment': {
            title: 'Alignment',
        },
        'seqanal': {
            title: 'Sequence Analysis',
        },
        '2ary': {
            title: '2ary Structure',
        },
        '3ary': {
            title: '3ary Structure',
        },
        'classification': {
            title: 'Classification',
        },
        'utils': {
            title: 'Utils',
        },
    },
    parameters: {
        textArea: {
            pasteExample: 'Paste Example',
            uploadFile: 'Upload File',
            uploadedFile: 'Uploaded File',
            alignTwoSeqToggle: 'Align two sequences or MSAs',
        },
        select: {
            singlePlaceholder: 'Select one',
            multiplePlaceholder: 'Select options',
            maxElementsSelected: 'Max. elements selected',
            maxElementsSelectedHHpred: 'Only 4 databases may be selected at a time!',
        },
        customJobId: {
            placeholder: 'Custom Job ID',
        },
        modellerKey: {
            stored: 'MODELLER-key is stored in your profile.',
        },
        emailNotification: 'E-Mail notification',
        isPublic: {
            true: 'Job is public',
            false: 'Job is private',
        },
        labels: {
            standarddb: 'Select standard database',
            pmin: 'Min. probability in hit list (> 10%)',
            desc: 'No. of target sequences (up to 10000)',
            maxrounds: 'Max. number of iterations',
            evalue: 'E-value',
            output_order: 'Output the alignment in:',
            pcoils_input_mode: 'Input mode',
            matrix: 'Scoring Matrix',
            min_seqid_query: 'Min. seq. identity of MSA hits with query (%)',
            hhblitsdb: 'Select database',
            hhblits_incl_eval: 'E-value inclusion threshold',
            hhsuitedb: 'Select database (PDB_mmCIF70 for modeling)',
            proteomes: 'Proteomes',
            msa_gen_method: 'MSA generation method',
            msa_gen_max_iter: 'Maximal no. of MSA generation steps',
            hhpred_incl_eval: 'E-value incl. threshold for MSA generation',
            min_cov: 'Min. coverage of MSA hits (%)',
            ss_scoring: 'Secondary structure scoring',
            alignmacmode: 'Alignment Mode:Realign with MAC',
            macthreshold: 'MAC realignment threshold',
            hmmerdb: 'Select database',
            max_hhblits_iter: 'MSA enrichment iterations using HHblits',
            patsearchdb: 'Select database',
            grammar: 'Select grammar',
            seqcount: 'Maximum number of sequences to display',
            blast_incl_eval: 'E-value inclusion threshold',
            gap_open: 'Gap open penalty',
            gap_ext_kaln: 'Gap extension penalty',
            gap_term: 'Terminal gap penalty',
            bonusscore: 'Bonus Score',
            mafft_gap_open: 'Gap open penalty',
            offset: 'Offset',
            msa_gen_max_iter_hhrepid: 'Maximal no. of MSA generation steps',
            score_ss: 'Score secondary structure',
            rep_pval_threshold: 'Repeat family P-value threshold',
            self_aln_pval_threshold: 'Self-Alignment P-value threshold',
            merge_iters: 'Merge rounds',
            domain_bound_detection: 'Domain boundary detection',
            matrix_marcoil: 'Matrix',
            transition_probability: 'Transition Probability',
            pcoils_weighting: 'Weighting',
            pcoils_matrix: 'Matrix',
            repper_input_mode: 'Input mode',
            window_size: 'Window size (< sequence length)',
            periodicity_min: 'Periodicity range - Min',
            periodicity_max: 'Periodicity range - Max',
            ftwin_threshold: 'FTwin threshold',
            repwin_threshold: 'REPwin threshold',
            eval_tpr: 'E-value inclusion TPR & SEL',
            invoke_psipred: '% identity cutoff to invoke a new PSIPRED run',
            hhompdb: 'Select HMM databases',
            alignmode: 'Alignment Mode',
            target_psi_db: 'Select database for MSA generation',
            quick_iters: 'Maximal no. of MSA generation steps',
            regkey: 'Enter MODELLER-key (see help pages for details)',
            samcc_helixone: 'Definition for helix 1',
            samcc_helixtwo: 'Definition for helix 2',
            samcc_helixthree: 'Definition for helix 3',
            samcc_helixfour: 'Definition for helix 4',
            samcc_periodicity: 'Periodicity',
            eff_crick_angle: 'Effective Crick angle',
            clans_eval: 'Extract BLAST HSP\'s up to E-values of',
            min_seqid: 'Minimum sequence identity',
            min_aln_cov: 'Minimum alignment coverage',
            clustering_mode: 'Clustering mode',
            matrix_phyml: 'Model of AminoAcid replacement',
            no_replicates: 'Number of replicates',
            inc_nucl: 'Include nucleic acid sequence',
            amino_nucl_rel: 'Amino acids in relation to nucleotides',
            codon_table: 'Select codon usage table',
            inc_amino: 'Include amino acid sequence in output',
            genetic_code: 'Choose a genetic code',
            codon_table_organism: 'Use codon usage table of',
            in_format: 'Input format',
            out_format: 'Output format',
            max_seqid: 'Maximal Sequence Identity (%)',
            min_query_cov: 'Minimal coverage with query (%)',
            num_seqs_extract: 'No. of most dissimilar sequences to extract',
        },
    },
    validation: {
        invalidCharacters: 'Invalid Characters.',
        autoTransformedToFasta: '{detected} detected. Auto-transformed to FASTA.',
        nucleotideError: 'Input contains nucleotide sequence(s). Expecting protein sequence(s).',
        emptyHeader: 'Empty header.',
        maxSeqNumber: 'Input contains more than {limit} sequences.',
        minSeqNumber: 'Input contains less than {limit} sequences.',
        maxSeqLength: 'Maximum allowed sequence length is {limit}.',
        minSeqLength: 'Minimum required sequence length is {limit}.',
        onlyDashes: 'Sequence contains only dots/dashes.',
        sameLength: 'Sequences should have the same length.',
        maxLength: 'Input contains over {limit} characters.',
        uniqueIDs: 'Identifiers are not unique.',
        invalidSequenceType: 'Invalid sequence type. Expected {expected}.',
        invalidSequenceFormat: 'Invalid sequence format. Expected {expected}.',
        valid: '{type} {format}',
        validRegex: 'Valid input.',
        invalidWhiteSpace: 'White spaces are not allowed!',
        maxRegexLength: 'Maximum allowed length is 200 characters.',
        invalidPDB: 'Invalid PDB input. Expected at least 21 ATOM records.',
        validPDB: 'Valid PDB input.',
        invalidAccessionID: 'Invalid input. Expecting accession ID(s).',
        validAccessionID: 'Valid input.',
        emptySequences: 'Empty sequences are not allowed.',
    },
    reformat: {
        inputPlaceholder: 'Enter a sequence...',
        detectedFormat: 'Found format: <b>{format}</b>',
        selectOutputFormat: 'Select Output Format',
        forwardTo: 'Forward to',
        download: 'Download',
        copyToClipboard: 'Copy to clipboard',
        copySuccess: 'Successfully copied',
        copyFailure: 'Unable to copy',
    },
    alignmentViewer: {
        loading: 'Loading...',
    },
    citations: {
        intro: 'If you use {tool} on our Toolkit for your research, please cite:',
        clustalo: 'Fast, scalable generation of high-quality protein multiple sequence ' +
            'alignments using Clustal Omega.<br>Sievers F et al. <a ' +
            'href="http://msb.embopress.org/content/7/1/539" ' +
            'target="_blank" rel="noopener">Mol Syst Biol. 2011 Oct 11;7:539</a>.',
        kalign: 'Kalign2: high-performance multiple alignment of protein and nucleotide ' +
            'sequences allowing external features.<br>Lassmann T, Frings O, Sonnhammer EL. ' +
            '<a href="https://academic.oup.com/nar/article-lookup/doi/10.1093/nar/gkn1006" ' +
            'target="_blank" rel="noopener">Nucleic Acids Res. 2009 Feb;37(3):858-65</a>.',
        mafft: 'MAFFT multiple sequence alignment software version 7: improvements in performance ' +
            'and usability.<br>Katoh K, Standley DM. <a ' +
            'href="https://academic.oup.com/mbe/article-lookup/doi/10.1093/molbev/mst010" ' +
            'target="_blank" rel="noopener">Mol Biol Evol. 2013 Apr;30(4):772-80</a>.',
        msaprobs: 'Multiple protein sequence alignment with MSAProbs.<br>' +
            'Liu Y, Schmidt B. <a href="https://link.springer.com/protocol/10.1007%2F978-1-62703-646-7_14" ' +
            'target="_blank" rel="noopener">Methods Mol Biol. 2014;1079:211-8</a>.',
        muscle: 'MUSCLE: multiple sequence alignment with high accuracy and high throughput.<br>' +
            'Edgar RC. <a href="https://academic.oup.com/nar/article-lookup/doi/10.1093/nar/gkh340" ' +
            'target="_blank" rel="noopener">Nucleic Acids Res. 2004 Mar 19;32(5):1792-7</a>.',
        tcoffee: 'A novel method for fast and accurate multiple sequence alignment.<br>' +
            'Notredame C, Higgins DG, Heringa J. <a href="https://www.ncbi.nlm.nih.gov/pubmed/10964570" ' +
            'target="_blank" rel="noopener">J Mol Biol. 2000 Sep 8;302(1):205-17</a>.',
        clans: 'CLANS: a Java application for visualizing protein families based on pairwise similarity.<br>' +
            'Frickey T, Lupas A.<a ' +
            'href="https://academic.oup.com/bioinformatics/article-lookup/doi/10.1093/bioinformatics/bth444" ' +
            'target="_blank" rel="noopener"> Bioinformatics. 2004 Dec 12;20(18):3702-4.</a><br><br>' +
            'BLAST+: architecture and applications.<br>Camacho C, Coulouris G, Avagyan V, Ma N, ' +
            'Papadopoulos J, Bealer K, Madden TL. ' +
            '<a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-10-421" ' +
            'target="_blank" rel="noopener">BMC Bioinformatics. 2009 Dec 15;10:421</a>.',
    },
};
