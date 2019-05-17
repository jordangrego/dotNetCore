using libApp.Entities;
using System;
using System.IO;
using System.Xml.Serialization;

namespace libApp.Util
{
    public static class UtilBase
    {
        public static Base RecuperaBase(byte[] arquivo)
        {
            try
            {
                // Realiza a importação.
                Base baseLancamento = new Base();
                XmlSerializer x = new XmlSerializer(baseLancamento.GetType());
                Stream stream = new MemoryStream(arquivo);
                StreamReader leitor = new StreamReader(stream);

                baseLancamento = (Base)x.Deserialize(leitor);
                leitor.Close();
                return baseLancamento;
            }
            catch (System.Exception)
            {
                throw new Exception("Erro ao ler o arquivo xml");
            }
        }

        public static void GravarBase(Base baseLancamento, string pathArquivo)
        {
            XmlSerializer x = new XmlSerializer(baseLancamento.GetType());
            StreamWriter escritor = new StreamWriter(pathArquivo);
            x.Serialize(escritor, baseLancamento);
            escritor.Close();
        }

        public static void GravarBase(Base baseLancamento)
        {
            string pathArquivoBase = AppDomain.CurrentDomain.BaseDirectory + "\\Base.xml";
            XmlSerializer x = new XmlSerializer(baseLancamento.GetType());
            StreamWriter escritor = new StreamWriter(pathArquivoBase);
            x.Serialize(escritor, baseLancamento);
            escritor.Close();
        }

        public static Base RecuperarBase()
        {
            string pathArquivoBase = AppDomain.CurrentDomain.BaseDirectory + "\\Base.xml";

            FileStream fs = null;
            try
            {
                fs = File.OpenRead(pathArquivoBase);
                byte[] bytes = new byte[fs.Length];
                fs.Read(bytes, 0, Convert.ToInt32(fs.Length));
                return RecuperaBase(bytes);
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