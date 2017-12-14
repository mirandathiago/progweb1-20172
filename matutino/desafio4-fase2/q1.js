let retangulo = {
    
    base:10,
    altura:5,
    
    calculaArea: function(){
     document.write( this.base * this.altura );
    },
    
    calculaPerimetro: function(){
        let perimetro = 2 * (this.base + this.altura);
        document.write(perimetro);
    },
    
    mudaBase: function(novabase){
        this.base = novabase;
    },
    
    mudaAltura: function(novaaltura){
        this.altura = novaaltura;
    },
    
    imprimeLados: function(){
        document.write("Base:"+this.base);
        document.write("<br>");
        document.write("Altura:"+this.altura);
        document.write("<br>");
    }
    
    
};

retangulo.mudaAltura(7);
retangulo.mudaBase(31);
retangulo.imprimeLados();
retangulo.calculaArea();
document.write("<br>");
retangulo.calculaPerimetro();







