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

namespace webapiApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : AbstractController
    {
        PessoaService pessoaService = new PessoaService();

        // GET api/values
        [HttpGet, Authorize]
        public ActionResult<ReturnModel> Get()
        {
            return this.GetSuccessReturn(this.pessoaService.ListarPessoas().ToArray<Pessoa>());
        }

        // GET api/values/5
        [HttpGet("{id}"), Authorize]
        public ActionResult<ReturnModel> Get(int id)
        {
            return this.GetSuccessReturn(this.pessoaService.Get(id));
        }

        // POST api/values
        [HttpPost]
        public ActionResult<ReturnModel> Post([FromBody] Pessoa pessoa)
        {
            return this.GetSuccessReturn(pessoa);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
