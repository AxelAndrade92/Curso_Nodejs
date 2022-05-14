function sumar(x1, x2) {
    return x1 +  x2;
}

function restar(x1, x2) {
    return x1 -  x2;
}

function multiplicar(x1, x2) {
    return x1 *  x2;
}

function dividir(x1, x2) {
    if (x2 ==00) {
        console.log('no se puede dividir por cero');
    }else{
        return x1 /  x2;
    }
    
}


exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir =  dividir;