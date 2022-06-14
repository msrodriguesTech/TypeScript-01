import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> =  [];

    adiciona(negocicao: Negociacao){
        this.negociacoes.push(negocicao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return [...this.negociacoes];
    }
}

