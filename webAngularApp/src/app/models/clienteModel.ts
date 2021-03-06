
import { EnderecoModel } from './enderecoModel';
import { TelefoneModel } from './telefoneModel';

export class ClienteModel {
    idCliente : number;
    nome :string;
    cpfCnpj : string;
    tipoPessoa : string;
    dataCadastro : Date;
    listaEnderecos : Array<EnderecoModel>;
    listaTelefones : Array<TelefoneModel>;
}