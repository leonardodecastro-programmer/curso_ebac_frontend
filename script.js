// Função para criar um array de objetos representando alunos
function criarArrayDeAlunos() {
  const alunos = [
    new Map([['nome', 'João'], ['nota', 7]]),
    new Map([['nome', 'Maria'], ['nota', 5]]),
    new Map([['nome', 'Pedro'], ['nota', 8]]),
    new Map([['nome', 'Ana'], ['nota', 4]]),
    new Map([['nome', 'Carlos'], ['nota', 6]])
  ];
  return alunos;
}

// Função que retorna apenas os alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
  return alunos.filter(aluno => aluno.get('nota') >= 6);
}

// Criar o array de alunos
const arrayDeAlunos = criarArrayDeAlunos();

// Filtrar apenas os alunos aprovados
const alunosAprovados = filtrarAlunosAprovados(arrayDeAlunos);

// Exibir os resultados no console
console.log("Todos os alunos:", arrayDeAlunos);
console.log("Alunos aprovados:", alunosAprovados);