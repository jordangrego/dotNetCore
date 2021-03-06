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
    public class ClienteController : AbstractController {
        ClienteService clienteService = new ClienteService ();

        // GET api/values
        [HttpGet, Authorize]
        public ActionResult<ReturnModel> Get () {
            return this.GetSuccessReturn (this.clienteService.ListarCliente ().ToArray<Cliente> ());
        }

        // GET api/values/5
        [HttpGet ("{id}"), Authorize]
        public ActionResult<ReturnModel> Get (int id) {
            return this.GetSuccessReturn (this.clienteService.Get (id));
        }

        // POST api/values
        [HttpPost, Authorize]
        public ActionResult<ReturnModel> Post ([FromBody] Cliente cliente) {
            return this.GetSuccessReturn (this.clienteService.Insert (cliente));
        }

        // POST api/values
        [HttpPost ("insert"), Authorize]
        public ActionResult<ReturnModel> Insert ([FromBody] Cliente cliente) {
            return this.GetSuccessReturn (cliente);
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<ReturnModel> Put ([FromBody] Cliente cliente) {
            return this.GetSuccessReturn(this.clienteService.Update(cliente));
        }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public void Delete (int id) {
            this.GetSuccessReturn (this.clienteService.Delete (id));
        }
    }
}