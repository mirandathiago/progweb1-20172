function soma(a,b){
    return a+b;
}

let soma1 = function(a,b){
    return a+b;
};

let soma2 = (a,b) => {
    return a+b;
};

//soma3 => O Return não pode ser utilizado.
//let soma3 = (a,b) => return a+b;

let soma4 = (a,b) => a+b;


let resultado = soma(10,5);
let resultado1 = soma1(10,5);
let resultado2 = soma2(10,5);
let resultado4 = soma4(10,5);

console.log(resultado,resultado1,resultado2,resultado4);


