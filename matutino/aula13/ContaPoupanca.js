function ContaPoupanca(nome,numero){
    
    this.nome = nome;
    this.numero = numero;
    
    this.sacar = function(valor){
        
        if(valor <= this.saldo){
            this.saldo -= valor;
        }
        
    }
        
}

ContaPoupanca.prototype = conta;