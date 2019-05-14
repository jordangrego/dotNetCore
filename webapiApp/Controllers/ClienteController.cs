using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using libApp.Entities;
using libApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using webapiApp.Controllers.Pattern;
using webapiApp.Model;

namespace webapiApp.Controllers {
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
        [HttpPut ("{id}")]
        public void Put (int id, [FromBody] string value) { }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public void Delete (int id) {
            this.GetSuccessReturn (this.clienteService.Delete (id));
        }
    }
}