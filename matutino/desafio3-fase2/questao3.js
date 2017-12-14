let aluno = {
  
    nome: "Maria",
    idade: 18,
    sexo: "F",
    curso: null,
    
    matricular: function(c){
        this.curso = c;
    },
    
    imprimir: function(){
        document.write( this.nome+"<br>");
        document.write( this.sexo+"<br>");
        document.write( this.curso+"<br>");
    }
    
    
};

aluno.matricular("Informatica");
aluno.imprimir();


