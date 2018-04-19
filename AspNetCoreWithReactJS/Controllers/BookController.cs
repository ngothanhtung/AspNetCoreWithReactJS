using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreWithReactJS.Controllers
{
    [Produces("application/json")]
    [Route("api/Book")]
    public class BookController : Controller
    {
        public BookController()
        {

        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
        {
            var items = new[] {
                new { Id = 1, Name = "John" },
                new { Id = 2, Name = "Peter" },
                new { Id = 3, Name = "Mary" }
            };

            return items.ToList();
        }
    }
}