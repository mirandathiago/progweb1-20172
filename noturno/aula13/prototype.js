function Animais(tipo){
    
    this.tipo = tipo;
    this.comida = "Nada";
    
    this.comer = function(){
        document.write(this.tipo+" "+this.nome+" comeu "+this.comida);
    }
    
    
}

function Coelho(nome){
    this.nome = nome;
    this.comida = "Cenoura";
}

Coelho.prototype = new Animais("Coelho");


let c1 = new Coelho("Pernalonga");
c1.comer();





