class Funcionario {
  constructor(nome,endereco,salario) {
    this._nome = nome;
    this._endereco = endereco;
    this._salario = salario;

  }

  let funcionarios = [
      {
          "nome": "Douglas",
          "endereco" : "Rua da esquina, 123",
          "salario" : "4500"
      },
      {
          "nome": "Felipe",
          "endereco" : "Rua da virada, 456",
          "salario" : "5000"
      },
      {
          "nome": "Silvio",
          "endereco" : "Rua da aresta, 789",
          "salario" : "6000"
      }
  ];



  let funcionariosHtml = funcionario.map (f =>`
    <tr>
                 <td>${f.nome}</td>
                 <td>${f.endereco}</td>
                 <td>${f.salario}</td>
             </tr>
    `)


    let htmlConcat = funcionariosHtml.join('');


    let tabela =  document.querySelector("tbody");
    tabela.innerHTML = htmlConcatenado;


  get nome(){
    return this._nome;
  }
  get endereco(){
    return this._endereco;
  }
  get salario (){
    return this._salario;
  }


}
