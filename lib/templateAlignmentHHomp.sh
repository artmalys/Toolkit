#!/bin/bash
# Set environment
source ${ENVIRONMENT}

if [[ ! -e "results/$accession" ]]
then
    DB=${HHOMPDBPATH}/HHOMP
    ffindex_get ${DB}_a3m.ffdata ${DB}_a3m.ffindex $accession >> results/$accession
fi