
using System;
using System.Collections.Generic;
using libApp.Entities;
using System.Linq;
using libApp.Util;
using System.IO;
using System.Diagnostics;

namespace libApp.Services
{
    public class PessoaService
    {
        public IList<Pessoa> ListarPessoas()
        {

            Base basePessoa = new Base();
            basePessoa.ListaPessoa = new List<Pessoa>();

            string pathArquivoBase = AppDomain.CurrentDomain.BaseDirectory + "\\Base.xml";
            Debug.WriteLine("=====> " + pathArquivoBase);

            // verifica se existe o arquivo no local
            if (!File.Exists(pathArquivoBase))
            {
                UtilBase.GravarBase(basePessoa, pathArquivoBase);
            }

            return UtilBase.RecuperarBase().ListaPessoa;
        }

        public Pessoa Get(int id)
        {
            return UtilBase.RecuperarBase().ListaPessoa.FirstOrDefault(x => x.IdPessoa == id);
        }

        public Pessoa Insert(Pessoa pessoa)
        {
            pessoa.IdPessoa = this.RecuperaProxIdPessoa();
            List<Pessoa> listaPessoa  = UtilBase.RecuperarBase().ListaPessoa;
            listaPessoa.Add(pessoa);
            this.GravaPessoas(listaPessoa);
            return pessoa;
        }

        private int RecuperaProxIdPessoa()
        {
            List<Pessoa> lista = UtilBase.RecuperarBase().ListaPessoa;

            if (lista != null && lista.Count > 0)
            {
                return lista.Select(l => l.IdPessoa).Max() + 1;
            }
            else
            {
                return 1;
            }
        }

        public Pessoa Delete(int id)
        {
            Pessoa pessoa = this.Get(id);
            List<Pessoa> listaPessoa = this.ListarPessoas().ToList();
            listaPessoa = listaPessoa.Where(x => x.IdPessoa != id).ToList();
            this.GravaPessoas(listaPessoa);
            return pessoa;
        }

        private void GravaPessoas(List<Pessoa> listaPessoa)
        {
            Base baseDB = UtilBase.RecuperarBase();
            baseDB.ListaPessoa = listaPessoa;
            UtilBase.GravarBase(baseDB);
        }
    }
}