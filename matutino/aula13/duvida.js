
function Aluno(nome,idade,turma){
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
}

function Turma(nome){
    this.nome = nome;
    
}

let t1 = new Turma("Informática");
let denilson = new Aluno("Denilson",18,t1);

console.log(denilson.turma.nome);


let pessoa = {
    nome: "joão",
    idade: 5,
    peso:7,
    altura:1,
    
    engordar: function(p){
        this.peso += p;
    },
    
    emagrecer:function(p){
        this.peso -= p;
    },
    crescer: function(a){
        if( this.idade <= 21 ){
           this.altura += a;
        }
    },
    
    envelhecer: function(){
        this.idade++;
        this.crescer(0.5);
    }
    
    
    
};


pessoa.engordar(2);
pesso.emagrecer(1);
pessoa.crescer(0.6);
pessoa.envelhecer();













