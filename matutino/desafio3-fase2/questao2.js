let rex = {
    nome: "Rex",
    raca: "Bulldog",
    especie: "Cachorro",
    peso: "3kg",
    idade: 1,
    preco:500
};

let marie = {
   nome: "Marie",
   raca: "Siames",
   especie:"Gato",
   peso:"1kg",
   idade:1.2,
   preco: 100000000
};


for(let prop in marie ){
    
    document.write( prop );
    document.write(" - ");
    document.write( marie[prop] );
    document.write("<br>");
}



//alert( marie["raca"] );
//alert( marie.raca );








