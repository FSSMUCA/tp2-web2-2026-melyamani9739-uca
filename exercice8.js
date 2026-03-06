let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

nom = nom.trim()

let ageNumber = parseInt(age)

let emailValide = false
if (email.includes("@") && email.includes(".")) {
emailValide = true
}

let score = parseInt(scoreJeu)
if (isNaN(score)) {
score = 0
}

let admin = false
if (estAdmin === "true") {
admin = true
}

let connexion = derniereConnexion ?? "Jamais connecté"

let connexions = Number(nombreConnexions)

console.log("===== RAPPORT UTILISATEUR =====")
console.log("nom :", nom)
console.log("age :", ageNumber)
console.log("email valide :", emailValide)
console.log("score :", score)
console.log("estAdmin :", admin)
console.log("derniereConnexion :", connexion)

if (connexions === 0)
console.log("nombreConnexions : Aucune connexion")
else
console.log("nombreConnexions :", connexions)

console.log("===============================")