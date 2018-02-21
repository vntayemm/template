using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace template_api_proj.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<DummyData> Get()
        {
            return StaticDatas.DataList;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public static class StaticDatas
    {
        public static List<DummyData> DataList = new List<DummyData> 
        { 
            new DummyData{Id = 1, Value = "value-1"},
            new DummyData{Id = 2, Value = "value-2"},
            new DummyData{Id = 3, Value = "value-3"},
            new DummyData{Id = 4, Value = "value-4"},
        };
    }

    public class DummyData
    {
        public int Id { get; set; }
        public string Value { get; set; }
    }
}
