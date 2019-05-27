﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using libApp.Entities;
using libApp.Util;

namespace libApp.Services
{
    public class UsuarioService
    {
        public Usuario getUsuario(string username, string password)
        {
            return UtilBase.RecuperarBase().ListaUsuarios.FirstOrDefault(x => x.UserName == username && x.Password == password);
        }

        public IList<Usuario> ListarUsuarios()
        {
            List<Usuario> listaUsuario = UtilBase.RecuperarBase().ListaUsuarios;
            listaUsuario.ForEach(p =>
            {
                p.Password = null;
            });

            return listaUsuario;
        }

        public Usuario Get(string id)
        {
            Usuario usuario = UtilBase.RecuperarBase().ListaUsuarios.FirstOrDefault(x => x.IdUsuario == id);
            if (usuario != null)
            {
                usuario.Password = null;
            }
            return usuario;
        }

        public object Delete(string id)
        {
            Usuario cliente = this.Get(id);
            List<Usuario> listaUsuario = this.ListarUsuarios().ToList();
            listaUsuario = listaUsuario.Where(x => x.IdUsuario != id).ToList();
            this.GravaUsuario(listaUsuario);
            return cliente;
        }

        public Usuario Update(Usuario usuario)
        {
            List<Usuario> listaUsuarios = this.ListarUsuarios().ToList<Usuario>();
            Usuario usuarioUpdate = listaUsuarios.FirstOrDefault(x => x.IdUsuario == usuario.IdUsuario);
            if (usuarioUpdate != null)
            {
                usuarioUpdate.IdUsuario = usuario.IdUsuario;
                usuarioUpdate.UserName = usuario.UserName;
                usuarioUpdate.Nome = usuario.Nome;
                usuarioUpdate.Email = usuario.Email;
            }
            this.GravaUsuario(listaUsuarios);
            return usuarioUpdate;
        }

        public Usuario Insert(Usuario usuario)
        {
            usuario.IdUsuario = Guid.NewGuid().ToString();
            List<Usuario> listaUsuario = UtilBase.RecuperarBase().ListaUsuarios;
            listaUsuario.Add(usuario);
            this.GravaUsuario(listaUsuario);
            return usuario;
        }

        private void GravaUsuario(List<Usuario> listaUsuario)
        {
            Base baseDB = UtilBase.RecuperarBase();
            baseDB.ListaUsuarios = listaUsuario;
            UtilBase.GravarBase(baseDB);
        }
    }
}
