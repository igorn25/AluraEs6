class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        let arquivo =new Arquivo(...this._inputDados.value.split('/').map(arquivo => arquivo.toUpperCase()));
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.

        console.log(`Nome do arquivo:${arquivo.nome}, Tamanho:${arquivo.tamanho}, Tipo de Arquivo:${arquivo.tipo}`);
    }

    criar(){
      return new Arquivo(..._inputDados.split('/'));
    }


    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}
