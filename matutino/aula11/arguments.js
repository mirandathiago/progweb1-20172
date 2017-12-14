
function soma(a,b){
    
    console.log( arguments ); //Contem todos os parametros
    console.log( arguments.length ); //Quantidade de Parâmtros Recebidos
    
    console.log( arguments[3] ); //Acessa 4 Parametro passado 
    
    
    return a + b;
    
}


let resultado = soma(10,2,3,50);
document.write(resultado);