let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

console.log("nom ?? :", nom ?? "valeur par défaut")
console.log("age ?? :", age ?? "valeur par défaut")
console.log("ville ?? :", ville ?? "valeur par défaut")
console.log("score ?? :", score ?? "valeur par défaut")
console.log("actif ?? :", actif ?? "valeur par défaut")

console.log("nom || :", nom || "valeur par défaut")
console.log("age || :", age || "valeur par défaut")
console.log("ville || :", ville || "valeur par défaut")
console.log("score || :", score || "valeur par défaut")
console.log("actif || :", actif || "valeur par défaut")

if ((nom ?? "valeur par défaut") === (nom || "valeur par défaut"))
console.log("nom : même résultat")
else
console.log("nom : résultat différent")

if ((age ?? "valeur par défaut") === (age || "valeur par défaut"))
console.log("age : même résultat")
else
console.log("age : résultat différent")

if ((ville ?? "valeur par défaut") === (ville || "valeur par défaut"))
console.log("ville : même résultat")
else
console.log("ville : résultat différent")

if ((score ?? "valeur par défaut") === (score || "valeur par défaut"))
console.log("score : même résultat")
else
console.log("score : résultat différent")

if ((actif ?? "valeur par défaut") === (actif || "valeur par défaut"))
console.log("actif : même résultat")
else
console.log("actif : résultat différent")