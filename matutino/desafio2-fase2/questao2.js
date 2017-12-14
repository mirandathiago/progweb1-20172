function bomdia(){
   console.log("Parametros:"+ arguments.length );
    
   console.log( "Posição 0:"+ arguments[0] );
    let quantidade = arguments.length;
    
    for(let i=0; i < quantidade; i++ ){
        
        document.write("Bom dia "+arguments[i]+"<br>");
        
    }
    
    document.write("Hoje eu dei "+quantidade+" Bom dias<br>");
    
}


bomdia("Maria","Pedro","Joana","Rui","Lara");