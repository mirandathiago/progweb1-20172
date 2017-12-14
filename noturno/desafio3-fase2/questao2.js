let cachorro = {
   nome:"Rex",
   raca:"Pitbull",
   cor:"Preta",
   sexo:"M",
   tipo:"Cachorro",
   idade:5,
   proprietario: "Kleber"   
};
let gato = {
   nome:"Miau",
   raca:"Siames",
   cor:"Branco",
   sexo:"M",
   tipo:"Gato",
   idade:2,
   proprietario: "Isabela e Fabiane"   
};


//alert( gato.nome );
//alert( gato["nome"] );

for(let prop in gato ){
    document.write(prop);
    document.write(" - ");
    document.write( gato[prop] );
    document.write("<br>");
}

for(let prop in cachorro ){
    document.write(prop);
    document.write(" - ");
    document.write( cachorro[prop] );
    document.write("<br>");
}






