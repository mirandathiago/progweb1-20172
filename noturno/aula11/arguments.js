function soma(a,b){
    console.log( arguments ); //Guarda todos os parametros recebidos pela função.
    
    console.log( arguments.length );
    
    console.log(arguments[3]);
    
    document.write(a+b);
}

function somaTodos(){
    
    let total = 0;
    let quantidade = arguments.length;
    
    for(let i = 0; i < quantidade; i++ ){
        
        total = total + arguments[i];
        
    }
    
    document.write("Total:"+total);
    
}

somaTodos(3,4,5);
document.write("<br>");
soma(10,5,9,55,6);










