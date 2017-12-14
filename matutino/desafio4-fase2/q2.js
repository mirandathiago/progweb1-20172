function Tamagushi(nome){
    
    this.nome = nome;
    this.alimentado = 5;
    this.saude = 5;
    this.idade = 0;
    
    this.envelhecer = function(){
        this.idade++;
        this.saude--;
        this.alimentado--;
        document.write(this.nome+" Envelheceu!"+this.idade+"anos<hr>");
    }
    this.medicar = function(){
        this.saude++;
        document.write(this.nome+" Foi Medicado!<hr>");
    }
    this.alimentar = function(){
        this.alimentado++;
        document.write(this.nome+" Foi alimentado!<hr>");
    }
    this.status = function(){
        
        let st = this.saude + this.alimentado;
        let ta = "";
        
        if(st >=17 && st <= 20){
            ta = "Muito Feliz";
        }else if( st >=14 && st <= 16 ){
            ta = "Feliz";
        }else if( st >=9 && st <= 13){
            ta = "+/-";
        }else if( st >= 5 && st <= 8 ){
            ta = "Triste";
        }else if( st >= 2 && st <= 4 ){
            ta = "Doente";
        }else{
            ta = "Morto! RIP!!!";
        }
        
        document.write(this.nome+" está "+ta+"<hr>");
        
        
    }
    
    this.imprime = function(){
        document.write("Tamagushi 2.0<hr><hr><hr>");
        for( prop in this ){
            
            if( typeof this[prop] != "function" ){
                document.write(prop);
                document.write(":");
                document.write(this[prop]);
                document.write("<br>");
            }
            
            
        }
        this.status();
    }
    
    
    
    
}



let bob = new Tamagushi("Bob");
bob.imprime();
bob.envelhecer();
bob.alimentar();
bob.medicar();
bob.envelhecer();
bob.envelhecer();
bob.alimentar();
bob.medicar();
bob.alimentar();
bob.medicar();
bob.envelhecer();
bob.alimentar();
bob.medicar();
bob.alimentar();
bob.medicar();
bob.envelhecer();
bob.imprime();







