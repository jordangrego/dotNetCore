using System;
using System.IO;

namespace libApp.Util
{
    public static class UtilIO
    {
        public static void CriarPasta(string folder)
        {
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }
        }

        public static void GravaArquivoFileSystem(byte[] conteudo, string pathArquivo)
        {
            FileStream fileStream = new FileStream(pathArquivo, FileMode.Create, FileAccess.Write);
            fileStream.Write(conteudo, 0, conteudo.Length);
            fileStream.Close();
        }

        public static void DeleteArquivoFileSystem(string pathArquivo)
        {
            File.Delete(pathArquivo);
        }

        public static byte[] RecuperaArquivoFileSystem(string pathArquivo)
        {
            FileStream fs = null;
            try
            {
                fs = File.OpenRead(pathArquivo);
                byte[] bytes = new byte[fs.Length];
                fs.Read(bytes, 0, Convert.ToInt32(fs.Length));
                return bytes;
            }
            finally
            {
                if (fs != null)
                {
                    fs.Close();
                    fs.Dispose();
                }
            }
        }
    }
}
