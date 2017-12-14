let animais = {
    tipo:'',
    comida: "Nada",
    comer: function(){
        document.write(this.tipo+" "+this.nome+" comeu "+this.comida);
    }
    
}

function Coelho(nome){
    this.nome = nome;
    this.tipo = "Coelho";
    this.comida = "Cenoura";
}

Coelho.prototype = animais;


let c1 = new Coelho("Pernalonga");
c1.comer();





