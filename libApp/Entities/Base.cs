using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using libApp.Entities;

namespace libApp.Entities
{
    /// <summary>
    /// Base do Usuário.
    /// </summary>
    public class Base
    {
        public List<Pessoa> ListaPessoa { get; set; }
    }
}