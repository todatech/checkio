const log = console.log;

const mapObj = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
}

const DNAStrand = (dna) => dna.split('').map(v => mapObj[v]).join('');

log(DNAStrand("AAAA"),"TTTT","String AAAA is");
log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
log(DNAStrand("GTAT"),"CATA","String GTAT is");