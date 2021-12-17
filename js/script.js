//pulsante per scegliere la difficoltà 

//creazione griglie in base alla difficoltà
//difficoltà 1 
const difficoltà1 = document.querySelector('.difficoltà1');

function tanteGriglie(difficoltà1) {
    const quadrato = document.createElement('div');
    quadrato.className = 'cella';
    difficoltà1.append(quadrato);
}

for (let i = 0; i < 100; i++) {
    tanteGriglie(difficoltà1);
}

// //difficoltà 2 
const difficoltà2 = document.querySelector('.difficoltà2');

function griglieMedie(difficoltà2) {
    const quadrato = document.createElement('div');
    quadrato.className = 'cella';
    difficoltà2.append(quadrato);
}

for (let i = 0; i < 81; i++) {
    griglieMedie(difficoltà2);
}

// //difficoltà 3
const difficoltà3 = document.querySelector('.difficoltà3');

function pocheGriglie(difficoltà3) {
    const quadrato = document.createElement('div');
    quadrato.className = 'cella';
    difficoltà3.append(quadrato);
}

for (let i = 0; i < 49; i++) {
    pocheGriglie(difficoltà3);
}

