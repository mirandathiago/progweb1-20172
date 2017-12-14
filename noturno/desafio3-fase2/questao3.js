let aluno = {
  nome: "João",
  idade:19,
  cpf: 015556988,
  turma:null ,

  matricular: function(t){
      this.turma = t;
  },
    
  imprimir: function(){
      document.write( this.nome+" - "+this.turma );
  }    
    
    
};

aluno.matricular("informática");
aluno.imprimir();




