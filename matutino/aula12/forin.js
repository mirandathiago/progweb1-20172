let celular = {
    marca: "Samsung",
    modelo: "Galaxy Prime",
    cor: "Preto",
    memoria:"2gb",
    processador: "Octacore",
    preco:1200
};


for(propriedade in celular){
    
 document.write(propriedade+":");
 document.write( celular[propriedade] );
 document.write("<br>");
    
}

