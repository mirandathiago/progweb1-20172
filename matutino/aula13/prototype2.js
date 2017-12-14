let pessoa = {
    nome: ""  
};

let pessoaFisica = {
    cpf:013555771
};

let pessoaJuridica = {
    cpnj:55566442
};

pessoaFisica.prototype = pessoa;
pessoaJuridica.prototype = pessoa;

console.log(pessoaFisica,pessoaJuridica);
