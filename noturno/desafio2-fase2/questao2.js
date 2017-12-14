function boasvindas(){
    
    console.log( arguments.length );
    console.log( arguments );
    console.log( arguments[0] );
    
    let quantidade = arguments.length;
    
    for(let i=0; i < quantidade; i++ ){
    
        document.write("Boas Vindas "+arguments[i]+"<br>");
    }
}

boasvindas("Joao","Pedro","Maria","Julia");