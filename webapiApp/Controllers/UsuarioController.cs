using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using libApp.Entities;
using libApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using webapiApp.Controllers.Pattern;
using webapiApp.Model;

namespace webapiApp.Controllers
{
    [Route("api/[controller]")]
    public class UsuarioController : AbstractController
    {
        private UsuarioService usuarioService = new UsuarioService();

        // GET api/values
        [HttpGet, Authorize]
        public ActionResult<ReturnModel> Get()
        {
            return this.GetSuccessReturn(this.usuarioService.ListarUsuarios().ToArray<Usuario>());
        }

        // GET api/values/5
        [HttpGet("{id}"), Authorize]
        public ActionResult<ReturnModel> Get(string id)
        {
            return this.GetSuccessReturn(this.usuarioService.Get(id));
        }

        // POST api/values
        [HttpPost, Authorize]
        public ActionResult<ReturnModel> Post([FromBody] Usuario usuario)
        {
            return this.GetSuccessReturn(this.usuarioService.Insert(usuario));
        }

        // POST api/values
        [HttpPost("insert"), Authorize]
        public ActionResult<ReturnModel> Insert([FromBody] Usuario cliente)
        {
            return this.GetSuccessReturn(cliente);
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<ReturnModel> Put([FromBody] Usuario usuario)
        {
            return this.GetSuccessReturn(this.usuarioService.Update(usuario));
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            this.GetSuccessReturn(this.usuarioService.Delete(id));
        }
    }
}