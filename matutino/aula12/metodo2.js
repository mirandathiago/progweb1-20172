let livro = {
    titulo: "Harry Potter",
    autor: "JK Rowling",
    copias: 3,
    emprestar: function(alguem){
        document.write(this.titulo+" foi emprestado para "+alguem+"<br>");
        
        this.copias--;
    },
    devolver: function(quem){
        document.write(this.titulo+" foi devolvido por "+quem+"<br>");
        
        this.copias++;
        
    }
    
};

livro.emprestar("Maria");
livro.emprestar("Joaquim");
livro.devolver("Maria");

