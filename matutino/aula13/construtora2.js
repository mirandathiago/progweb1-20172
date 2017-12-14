function Produto(nome,valor){
    
    this.nome = nome;
    this.valor = valor;
    
    this.atualizaPreco = function(novovalor){
        this.valor = novovalor;
    }
    
    this.imprime = function(){
        
        for( prop in this ){
        
           if(typeof this[prop] != 'function'){    
            document.write(prop);
            document.write(": ");
            document.write(this[prop]);
            document.write("<br>");
           }
        }
        
    }
    
}


function Venda(data){
    
    this.data = data;
    this.total = 0;
    
    this.adicionaProduto = function(produto){
        
        this.total += produto.valor;
        produto.imprime();
        document.write("<hr>");
        
    }
    
    this.imprimeTotal = function(){
        
        document.write("Total: "+this.total);
        
    }
    
    
    
}




let p1 = new Produto('Bola',5.00);
p1.atualizaPreco(5.50);

let p2 = new Produto('Boneca',8.00);

let v = new Venda('08/12/2017');
v.adicionaProduto(p1);
v.adicionaProduto(p2);
v.imprimeTotal();



