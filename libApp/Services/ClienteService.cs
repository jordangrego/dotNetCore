using libApp.Entities;
using libApp.Util;
using System.Collections.Generic;
using System.Linq;

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
            cliente.IdCliente = this.RecuperaProxIdCliente();
            List<Cliente> listaCliente  = UtilBase.RecuperarBase().ListaClientes;
            listaCliente.Add(cliente);
            this.GravaCliente(listaCliente);
            return cliente;
        }

        private int RecuperaProxIdCliente()
        {
            List<Cliente> lista = UtilBase.RecuperarBase().ListaClientes;

            if (lista != null && lista.Count > 0)
            {
                return lista.Select(l => l.IdCliente).Max() + 1;
            }
            else
            {
                return 1;
            }
        }

        public object Update(Cliente cliente)
        {
            List<Cliente> listaClientes = this.ListarCliente().ToList<Cliente>();
            Cliente clienteUpdate = listaClientes.FirstOrDefault(x => x.IdCliente == cliente.IdCliente);
            if (clienteUpdate != null)
            {
                clienteUpdate.IdCliente = cliente.IdCliente;
                clienteUpdate.Nome = cliente.Nome;
                clienteUpdate.DataCadastro = cliente.DataCadastro;
                clienteUpdate.CpfCnpj = cliente.CpfCnpj;
                clienteUpdate.TipoPessoa = cliente.TipoPessoa;

                clienteUpdate.ListaEnderecos = cliente.ListaEnderecos;
                clienteUpdate.ListaTelefones = cliente.ListaTelefones;
            }
            this.GravaCliente(listaClientes);
            return clienteUpdate;
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