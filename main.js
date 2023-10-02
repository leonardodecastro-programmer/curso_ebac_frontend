function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.dizOi = function() {
    console.log("Olá meu nome é " + this.nome);
  }
}

function frontEnd(nome, idade, salario) {
  let _salario = salario;

  this.getSalario = function() {
    return _salario;
  }

  Pessoa.call(this, nome, idade)
}
function backEnd(nome, idade, salario) {
  let _salario = salario;

  this.getSalario = function() {
    return _salario;
  }

  Pessoa.call(this, nome, idade)
}
function fullStack(nome, idade, salario) {
  let _salario = salario;

  this.getSalario = function() {
    return _salario;
  }

  Pessoa.call(this, nome, idade)
}

const Funcionario1 = new frontEnd("Leo", 18, 1600)
const Funcionario2 = new backEnd("Bruno", 14, 300)
const Funcionario3 = new fullStack("Laercio", 32, 5000)

console.log(Funcionario1.retornaSalario())