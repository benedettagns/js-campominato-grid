function boxColored (element) {
    element.addEventListener('click', function () {
        this.classList.toggle('blue');
    })
}

document.querySelector('.facile').addEventListener('click', function () {
    console.log('FACILE');
    const difficoltà1 = document.querySelector('.difficoltà1');

    function tanteGriglie(difficoltà1) {
        const quadrato = document.createElement('div');
        quadrato.className = 'cella';
        difficoltà1.append(quadrato);
        boxColored(quadrato);
    }

    for (let i = 0; i < 100; i++) {
        tanteGriglie(difficoltà1);
    }
});

document.querySelector('.medio').addEventListener('click', function () {
    console.log('MEDIO');
    const difficoltà2 = document.querySelector('.difficoltà2');

    function griglieMedie(difficoltà2) {
        const quadrato = document.createElement('div');
        quadrato.className = 'cella';
        difficoltà2.append(quadrato);
        boxColored(quadrato);
    }

    for (let i = 0; i < 81; i++) {
        griglieMedie(difficoltà2);
    }
});

document.querySelector('.difficile').addEventListener('click', function () {
    console.log('DIFFICILE');
    const difficoltà3 = document.querySelector('.difficoltà3');

    function pocheGriglie(difficoltà3) {
        const quadrato = document.createElement('div');
        quadrato.className = 'cella';
        difficoltà3.append(quadrato);
        boxColored(quadrato);
    }

    for (let i = 0; i < 49; i++) {
        pocheGriglie(difficoltà3);
    }
});



