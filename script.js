const touchesNoires = document.querySelectorAll('.noire');
const touchesBlanches = document.querySelectorAll('.blanche');
const touchesPiano = document.querySelectorAll('.touche');
const texte = [
    'Je veux ce poste...\nChez Alsacréation',
    'Je veux ce poste...\nVoici ma motivation',
    'Je suis une développeuse\njoviale et digne de confiance',
    'Dès que je vois du CSS\nintérieurement je danse ',
    'Je veux ce poste,\n intégrer propre je sais',
    'La certification OPQUAST\n avec joie je passerai',
    'Si ni Vue et ni le Nuxt pour\nl\'instant je ne connais',
    'Du React j\'ai les bases\net très vite j\'apprendrai',
    'Je veux ce poste...\nLe JavaScript m’attire',
    'TypeScript, TreeJS... \nEn coder je désire',
    'Toutes ces lignes de code\nque je voudrais écrire',
    'Dans votre kiwi agence\nje vois mon avenir',
    '. . .',
    ];
let compteurTexte = 0;
let compteurNote = 0;
function jouerSon(newUrl){
    //console.log(newUrl);
    new Audio(newUrl).play();
}

function camilleChante(){
    const imgCamilleChante = document.querySelector('.chante');
    if (imgCamilleChante.style.opacity == 0) {
        console.log("ferme bouche")
        setTimeout(() => {
            imgCamilleChante.style.opacity = "0";
        }, 5000);
    }
    imgCamilleChante.style.opacity = "100";
}

function afficherTexte() {
    console.log("chanson")
    const p = document.getElementById('chanson');
    p.innerHTML = texte[compteurTexte];
    p.classList.add('blur');
    compteurTexte++;
    if (compteurTexte >= texte.length) {
        compteurTexte = 0;
        p.classList.remove('blur');
    }
}

function afficherNote() {
    if (compteurNote <= 4) {
        const div = document.getElementById('notes');
        const note = document.createElement( "img");
        if (compteurNote % 2 == 0) {
            note.src = "img/note-simple.svg";
        } else {
            note.src = "img/note-croche.svg";
        }
        div.appendChild(note);
        setTimeout(() => {
            note.remove()
            compteurNote--;
        }, 2000);
        compteurNote++;
    }
}

touchesNoires.forEach((touche, i ) => {
    const nb = (i + 1) ;
    const newUrl = 'audio/noires/noire' + nb +'.mp3';
    touche.addEventListener('click', () => jouerSon(newUrl))
});

touchesBlanches.forEach((touche, i ) => {
    const nb = (i + 1) ;
    const newUrl = 'audio/blanches/blanche' + nb +'.mp3';
    touche.addEventListener('click', () => jouerSon(newUrl));
});

touchesPiano.forEach((touche) => {
    touche.addEventListener('click', () => {
        camilleChante();
        afficherTexte();
        afficherNote();
    });
});