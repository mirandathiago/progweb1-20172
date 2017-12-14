function Animal(tipo){
    this.tipo = tipo;
    this.comida = "nada";
    
    this.comer = function(){
        document.write(this.tipo+" comeu "+this.comida+"<br>");
    }
    
    
}

function Coelho(){
    this.comida = "Cenoura";
}

Coelho.prototype = new Animal('Coelho');

let pernalonga = new Coelho();
pernalonga.comer();


