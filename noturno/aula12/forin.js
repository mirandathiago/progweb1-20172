let carro = {
    marca: "Volks",
    modelo: "Fusca",
    placa: "JHF-5500"
    
};


for( propriedade in carro ){
    
    document.write(propriedade+": ");
    document.write( carro[propriedade] );
    document.write("<br>");
    
}

