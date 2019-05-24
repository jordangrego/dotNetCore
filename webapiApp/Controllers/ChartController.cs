using libApp.Entities.Charts;
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
    public class ChartController : AbstractController
    {
        ChartService chartService = new ChartService();

        [HttpPost, Authorize]
        public ActionResult<ReturnModel> Post([FromBody] ChartPieModel model)
        {
            return this.GetSuccessReturn(this.chartService.GetPieData().ToArray<PieData>());
        }

        [HttpGet, Authorize]
        public ActionResult<ReturnModel> Get()
        {
            return this.GetSuccessReturn(this.chartService.GetBarData().ToArray<BarData>());
        }
    }
}