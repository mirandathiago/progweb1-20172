function Livro(t,a){
    
    this.titulo = t;
    this.autor = a;
    
    this.imprimir = function(){
        document.write(this.titulo+" - "+this.autor);
    }
    
    
}


var livro1 = new Livro("X","Y");
var livro2 = new Livro("Z","H");

livro1.imprimir();
livro2.imprimir();