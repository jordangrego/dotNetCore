using Microsoft.AspNetCore.Mvc;
using webapiApp.Model;

namespace webapiApp.Controllers.Pattern
{
    public abstract class AbstractController : Controller
    {
        protected ActionResult<ReturnModel> GetReturnModel(object data, bool success = true)
        {
            ReturnModel returnModel = new ReturnModel();
            returnModel.Success = success;
            returnModel.Data = data;

            return returnModel;
        }

        protected ActionResult<ReturnModel> GetSuccessReturn(object data)
        {
            return Ok(new ReturnModel(true, "Success", data));
        }

        protected ActionResult<ReturnModel> GetFailReturn(object data, string obs)
        {
            return Ok(new ReturnModel(false, obs, data));
        }
    }
}