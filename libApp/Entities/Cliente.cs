using System;
using System.Collections.Generic;

namespace libApp.Entities
{
    public class Cliente
    {
        public int IdCliente { get; set; }
        public string Nome { get; set; }
        public string CpfCnpj { get; set; }
        public DateTime DataCadastro { get; set; }
        public List<Endereco> ListaEnderecos { get; set; }
        public List<Telefone> ListaTelefones { get; set; }
    }
}