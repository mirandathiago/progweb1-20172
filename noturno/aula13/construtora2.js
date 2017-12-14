function Produto(nome,valor){
        
    this.nome = nome;
    this.valor = valor;
    
    this.atualizaValor = function(novovalor){
        this.valor = novovalor;
    }
    
    this.imprimir = function(){
        
        for( prop in this ){
           if(typeof this[prop] != 'function'){ 
            document.write(prop);
            document.write(":");
            document.write(this[prop]);
            document.write("<br>");
           }
        }
        
    }
    
}


p1 = new Produto("Bola",5.50);
p1.atualizaValor(6.50);
p1.imprimir();

p2 = new Produto("Carro",100);
p2.imprimir();








