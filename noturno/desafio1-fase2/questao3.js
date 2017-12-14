function calculaValor(prestacao,atraso){
    
    if(atraso == 0){
        let desconto = prestacao * 0.05;
        prestacao = prestacao - desconto;
    }else{
        
        let multa = prestacao * 0.03;
        let juros = (prestacao * 0.005) * atraso;
        
        prestacao = prestacao + multa + juros;
        
    }    
    
    return prestacao;
    
}

function executaQuestao3(){
    
let v = parseFloat( prompt("Digite o valor da Parcela") );
let d = parseInt( prompt("Digite os dias em atraso") );

let retorno = calculaValor(v,d);

alert(retorno);

}





