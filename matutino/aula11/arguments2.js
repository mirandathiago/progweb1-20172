let somaTodos = function(){
   
    let total = 0;
    let quantidade = arguments.length;
    
    for(let i=0; i < quantidade; i++){
        
        total += arguments[i];
                
    }
    
    document.write("Total: "+total+"<br>");
}


somaTodos(4,5,9,15);
somaTodos(2,2);