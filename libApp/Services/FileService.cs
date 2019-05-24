using libApp.Entities;
using libApp.Util;
using System;
using System.Collections.Generic;
using System.Linq;

namespace libApp.Services
{
    public class FileService
    {
        private string pathArquivos = AppDomain.CurrentDomain.BaseDirectory + "\\UploadedFiles\\";

        public IList<ArquivoFile> ListarArquivos()
        {
            return UtilBase.RecuperarBase().ListaArquivos;
        }

        public ArquivoFile Upload(ArquivoFile arquivoFile)
        {
            try
            {
                Guid idFile = Guid.NewGuid();
                if (arquivoFile.ConteudoFileBase64 == null || arquivoFile.ConteudoFileBase64.Length == 0)
                {
                    throw new Exception("Conteúdo vazio do Arquivo (Base64)");
                }

                byte[] conteudo = Convert.FromBase64String(arquivoFile.ConteudoFileBase64);

                UtilIO.CriarPasta(pathArquivos);
                UtilIO.GravaArquivoFileSystem(conteudo, pathArquivos + arquivoFile.NomeFile);

                arquivoFile.IdFile = idFile.ToString();
                arquivoFile.ConteudoFileBase64 = null;

                List<ArquivoFile> listaArquivos = UtilBase.RecuperarBase().ListaArquivos;
                listaArquivos.Add(arquivoFile);
                this.GravaBaseArquivo(listaArquivos);

                return arquivoFile;
            } catch (Exception ex)
            {
                throw new Exception("Erro ao gravar o arquivo", ex);
            }
        }

        public ArquivoFile Download(string idFile)
        {
            ArquivoFile arquivoFile = UtilBase.RecuperarBase().ListaArquivos.FirstOrDefault(x => x.IdFile == idFile);
            byte[] arq = UtilIO.RecuperaArquivoFileSystem(pathArquivos + arquivoFile.NomeFile);
            arquivoFile.ConteudoFile = arq;
            return arquivoFile;
        }

        public object Delete(string idFile)
        {
            ArquivoFile arquivoFile = UtilBase.RecuperarBase().ListaArquivos.FirstOrDefault(x => x.IdFile == idFile);
            List<ArquivoFile> listaArquivos = this.ListarArquivos().ToList();
            listaArquivos = listaArquivos.Where(x => x.IdFile != idFile).ToList();
            this.GravaBaseArquivo(listaArquivos);
            UtilIO.DeleteArquivoFileSystem(pathArquivos + arquivoFile.NomeFile);
            return arquivoFile;
        }

        private void GravaBaseArquivo(List<ArquivoFile> listaArquivos)
        {
            Base baseDB = UtilBase.RecuperarBase();
            baseDB.ListaArquivos = listaArquivos;
            UtilBase.GravarBase(baseDB);
        }
    }
}
