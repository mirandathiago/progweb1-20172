function soma(a,b,c){
    
    let resultado = a + b + c;
    return resultado;
    
}

function executaQuestao1(){
    
     var num1 = parseInt( prompt("Digite o n umero") );
     var num2 = parseInt( prompt("Digite o n umero") );
     var num3 = parseInt( prompt("Digite o n umero") );
            
     let retorno = soma(num1,num2,num3);
     alert(retorno);
    
}