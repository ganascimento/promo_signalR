using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GA.Promo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromoController : Controller
    {
        [HttpGet]
        public ActionResult<object> Index()
        {
            return Ok();
        }
    }
}