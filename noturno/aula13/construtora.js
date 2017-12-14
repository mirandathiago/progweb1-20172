function Animal(n,r,t){
    this.nome = n;
    this.raca = r;
    this.tipo = t;
    
}

let cachorro = new Animal("Rex","Pitbull","Cachorro");

let gato = new Animal("Miau","Siames","Gato");

document.write( cachorro.nome );

