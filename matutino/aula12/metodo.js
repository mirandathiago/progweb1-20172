let carro = {
    modelo:"Fusca",
    cor:"Preto",
    km:0,
    andar:function(quanto){
        document.write(this.modelo+" ANDOU! "+quanto+" KM<br>");
        
       this.km += quanto; 
    }
    
};

carro.andar(100);
carro.andar(50);
document.write( carro.km );