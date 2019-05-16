using System;

namespace libApp.Entities
{
    public class Telefone
    {
        public Guid IdTelefone { get; set; }
        public string CodPais { get; set; }
        public string DDD { get; set; }
        public string NumeroTelefone { get; set; }
    }
}