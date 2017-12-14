let pessoa = {
    nome:'',
    idade:0,
    sexo:'',
    
    setNome: function(nome){
        this.nome = nome;
    },
    
    setIdade: function(idade){
        this.idade = idade;
    },
    
    setSexo: function(sexo){
        this.sexo = sexo;
    },
    
    imprimir: function(){
        
        for( prop in this ){
            
            document.write(prop);
            document.write(":");
            document.write(this[prop]);
            document.write("<br>");
            
        }
        
    }
    
}

function Funcionario(cargo,salario){
    
    this.cargo = cargo;
    this.salario = salario;
    
}

Funcionario.prototype = pessoa;


let f1 = new Funcionario("Gerente",20000);
f1.setNome("Bob");








