let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0]

for (let i = 0; i < nombres.length; i++) {
    let n = nombres[i];
    let type;

    switch (true) {
        case Number.isNaN(n):
            type = "INVALIDE";
            break;

        case n === Infinity || n === -Infinity:
            type = "INFINI";
            break;

        case Object.is(n, -0):
            type = "ZERO NEGATIF";
            break;

        case Number.isInteger(n) && Number.isSafeInteger(n):
            type = "ENTIER SUR";
            break;

        case Number.isInteger(n) && !Number.isSafeInteger(n):
            type = "ENTIER HORS LIMITES";
            break;

        default:
            type = "DECIMAL";
    }

    console.log(n + " -> " + type);
}