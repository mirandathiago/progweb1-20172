function ContaCorrente(nome,numero){
    
    this.nome = nome;
    this.numero = numero;
    this.limite = 200;
    
    this.sacar = function(valor){
        
        let total = this.saldo + this.limite;
        
        if( valor <= total ){
            this.saldo -= valor;
        }
        
    }    
    
}

ContaCorrente.prototype = conta;








