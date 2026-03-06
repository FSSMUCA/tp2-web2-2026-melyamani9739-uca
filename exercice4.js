let paires = [
    [0, ""], [0,"0"], [0, false], [null, undefined], [null, false], [NaN, NaN], [1, "1"], [" \t\n", 0]
];

for (let i = 0; i < paires.length; i++){
    let a = paires[i][0];
    let b = paires[i][1];
    let affichageA;
    if (a === ""){
        affichageA = "(chaine vide)";
    }else {
        affichageA = a;
    }
     let affichageB;
    if (b === ""){
        affichageB = "(chaine vide)";
    }else {
        affichageB = b;
    }
     let colonne1 = `${affichageA} == ${affichageB}`.padEnd(35);
    let colonne2 = `${affichageA} === ${affichageB}`.padEnd(35);
    console.log(`${colonne1} -> ${a == b}`);
    console.log(`${colonne2} -> ${a === b}`);

}