
using System;
using System.Collections.Generic;
using libApp.Entities;
using System.Linq;
using libApp.Util;
using System.IO;
using System.Diagnostics;

namespace libApp.Services
{
    public class ClienteService
    {
        public IList<Cliente> ListarCliente()
        {
            return UtilBase.RecuperarBase().ListaClientes;
        }

        public Cliente Get(int id)
        {
            return UtilBase.RecuperarBase().ListaClientes.FirstOrDefault(x => x.IdCliente == id);
        }

        public Cliente Insert(Cliente cliente)
        {
            cliente.IdCliente = this.RecuperaProxIdPessoa();
            List<Cliente> listaCliente  = UtilBase.RecuperarBase().ListaClientes;
            listaCliente.Add(cliente);
            this.GravaCliente(listaCliente);
            return cliente;
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

        public Cliente Delete(int id)
        {
            Cliente cliente = this.Get(id);
            List<Cliente> listaCliente = this.ListarCliente().ToList();
            listaCliente = listaCliente.Where(x => x.IdCliente != id).ToList();
            this.GravaCliente(listaCliente);
            return cliente;
        }

        private void GravaCliente(List<Cliente> listaCliente)
        {
            Base baseDB = UtilBase.RecuperarBase();
            baseDB.ListaClientes = listaCliente;
            UtilBase.GravarBase(baseDB);
        }
    }
}