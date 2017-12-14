function conta(primeiro,segundo,terceiro){
    
    let dobro = segundo * 2;
    let resultado = (primeiro * dobro) / terceiro;
    
    return resultado;
    
}


let resultado = conta(2,5,4);
document.write("Resultado:"+resultado);