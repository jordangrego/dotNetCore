using libApp.Services;
using Microsoft.AspNetCore.Mvc;
using webapiApp.Controllers.Pattern;
using webapiApp.Model;

namespace webapiApp.Controllers
{
    [Route("api/[controller]")]
    public class UfController : AbstractController
    {
        UfService ufService = new UfService();

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<ReturnModel> Get()
        {
            return this.GetSuccessReturn(this.ufService.getListaUFs().ToArray());
        }
        
    }
}
