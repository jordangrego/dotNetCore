using System;
using System.Collections.Generic;
using System.Text;

namespace libApp.Entities
{
    public class ArquivoFile
    {
        public string IdFile { get; set; }
        public string NomeFile { get; set; }
        public string ConteudoFileBase64 { get; set; }
        public byte[] ConteudoFile { get; set; }
    }
}
