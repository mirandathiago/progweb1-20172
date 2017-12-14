function Livro(t,a){
    
    this.titulo = t;
    this.autor = a;
    
    this.imprimir = function(){
        document.write(this.titulo);
        document.write("<br>");
        document.write(this.autor);
        document.write("<hr>");
    }
    
}

let l1 = new Livro("Harry Potter","J");
l1.imprimir();

let l2 = new Livro("Javascript","X");
l2.imprimir(); 


