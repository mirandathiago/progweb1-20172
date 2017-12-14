let carro = {
    marca: "Volks",
    modelo: "Fusca",
    placa: "JHF-5500",
    km:0,
    
    andar:function(quanto){
        document.write("ANDOU! "+quanto+"km<br>");
        
        this.km += quanto;
        document.write("KM Atual: "+this.km+"<br>");
        
    }
    
};


carro.andar(100);
carro.andar(50);
carro.andar(200);



