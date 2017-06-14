class Aluno {
  constructor(matricula,nome) {
    this.matricula=matricula;
    this.nome = nome;

  }

  var m = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

var aprovados = m
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);

    console.log(aprovados);
}
