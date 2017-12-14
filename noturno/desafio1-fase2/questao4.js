function imprimenum(n){
    
    
    for(let i=1; i <= n; i++){
        for( let a =0; a < i; a++ ){
            document.write(i);
            document.write(" ");
        }
            
        document.write("<br>");
        
    }
    
}


document.write("<br>");
imprimenum(10);