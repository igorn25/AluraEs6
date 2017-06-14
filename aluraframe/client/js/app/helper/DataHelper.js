class DataHelper {
  constructor() {
    throw new Error('Você não pode criar uma instância dessa classe');

  }

    static textoParaData(texto){
      return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(){
      return `${negociacao.data.getDate()}/${(negociacao.data.getMonth()+1)}/${negociacao.data.getFullYear()}`;
    }
}
