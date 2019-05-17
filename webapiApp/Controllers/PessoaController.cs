using libApp.Entities;
using libApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using webapiApp.Controllers.Pattern;
using webapiApp.Model;

namespace webapiApp.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    public class PessoaController : AbstractController {
        PessoaService pessoaService = new PessoaService ();

        // GET api/values
        [HttpGet, Authorize]
        public ActionResult<ReturnModel> Get () {
            return this.GetSuccessReturn (this.pessoaService.ListarPessoas ().ToArray<Pessoa> ());
        }

        // GET api/values/5
        [HttpGet ("{id}"), Authorize]
        public ActionResult<ReturnModel> Get (int id) {
            return this.GetSuccessReturn (this.pessoaService.Get (id));
        }

        // POST api/values
        [HttpPost, Authorize]
        public ActionResult<ReturnModel> Post ([FromBody] Pessoa pessoa) {
            return this.GetSuccessReturn (this.pessoaService.Insert (pessoa));
        }

        // POST api/values
        [HttpPost ("insert"), Authorize]
        public ActionResult<ReturnModel> Insert ([FromBody] Pessoa pessoa) {
            return this.GetSuccessReturn (pessoa);
        }

        // PUT api/values/5
        [HttpPut, Authorize]
        public ActionResult<ReturnModel> Put ([FromBody] Pessoa pessoa) {
            return this.GetSuccessReturn(this.pessoaService.Update(pessoa));
        }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public void Delete (int id) {
            this.GetSuccessReturn (this.pessoaService.Delete (id));
        }
    }
}