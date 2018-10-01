
using System;
using System.Collections.Generic;
using libApp.Entities;
using System.Linq;

namespace libApp.Services
{
    public class PessoaService
    {
        public IList<Pessoa> ListarPessoas()
        {
            List<Pessoa> lista = new List<Pessoa>();
            lista.Add(new Pessoa() { IdPessoa = 1, Nome = "Pessoa 1" });
            lista.Add(new Pessoa() { IdPessoa = 2, Nome = "Pessoa 2" });
            return lista;
        }

        public Pessoa Get(int id)
        {
            return this.ListarPessoas().FirstOrDefault(x => x.IdPessoa == id);
        }
    }
}