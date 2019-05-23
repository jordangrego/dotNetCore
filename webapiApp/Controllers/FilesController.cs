using libApp.Entities;
using libApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using webapiApp.Controllers.Pattern;
using webapiApp.Model;

namespace webapiApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : AbstractController
    {
        FileService fileService = new FileService();

        [HttpPost, Authorize]
        public ActionResult<ReturnModel> Post([FromBody] ArquivoFile file)
        {
            return this.GetSuccessReturn(this.fileService.Upload(file));
        }

        [HttpGet, Authorize]
        public ActionResult<ReturnModel> Get()
        {
            return this.GetSuccessReturn(this.fileService.ListarArquivos().ToArray<ArquivoFile>());
        }

        [HttpGet("{id}")]
        public FileContentResult Get(string id)
        {
            ArquivoFile arquivo = this.fileService.Download(id);

            byte[] content = arquivo.ConteudoFile;
            FileContentResult fileContentResult = new FileContentResult(content, "application/octet-stream")
            {
                FileDownloadName = arquivo.NomeFile,
            };

            return fileContentResult;
        }

        [HttpDelete("{id}"), Authorize]
        public ActionResult<ReturnModel> Delete(string id)
        {
            return this.GetSuccessReturn(this.fileService.Delete(id));
        }
    }
}