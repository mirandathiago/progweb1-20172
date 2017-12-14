let media1 = function(n1,n2,n3){
    
    return (n1+n2+n3)/3;
    
}

let media2 = function(n1,n2,n3){
    
return ((n1*0.3) + (n2*0.3) + (n3*0.4));
    
}

let media3 = (n1,n2,n2) => (n1*0.2) + (n2*0.2) + (n3*0.6); 



function imprimenota(nome,n1,n2,n3,funcao){
    
    let media = funcao(n1,n2,n3);
    
    document.write(nome+" teve a média: "+media+"<br>");
    
    
}



imprimenota("X",10,8,7,media1);
imprimenota("Y",10,8,7,media2);


