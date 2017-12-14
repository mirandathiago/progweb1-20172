let apresentacao = function(nome,sobrenome){
    return "Meu nome é "+sobrenome+","+nome;
}

let apresentacao2 = (nome,sobrenome) => {
    return "Meu nome é "+sobrenome+","+nome;
}

let apresentacao3 = (nome,sobrenome) => "Meu nome é "+sobrenome+","+nome;


let soma = (a,b) => a+b;



alert( apresentacao("James","Bond") );
alert( apresentacao2("James","Bond") );
alert( apresentacao3("James","Bond") );
alert( soma(10,5) );

