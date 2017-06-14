class NegociacaoController {

    constructor() {

      let $ = document.querySelector.bind(document);
      this._inputData = $('#data');
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');
      this._negociacoes = new ListaNegociacoes();
    }


    adiciona(event){
        event.preventDefault();
        this._negociacoes.adiciona(this._criarNegociacao());
        this._limparTela();
        console.log(this._negociacoes.negociacoes);
    }


    _criarNegociacao(){
        let data = DataHelper.textoParaData(this._inputData.value);
        return new Negociacao(
          data,
          this._inputQuantidade.value,
          this._inputValor.value
        );
    }

    _limparTela(){
      this._inputData.value ='';
      this._inputQuantidade.value = 0 ;
      this._inputValor.value = 0.0;
      this._inputData.focus();
    }
}
