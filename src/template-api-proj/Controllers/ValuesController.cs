using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace template_api_proj.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<DummyData> Get()
        {
            return DataManager.DataList;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public int Post([FromBody]DummyData model)
        {
            var sources = DataManager.DataList;
            var newId = sources.Max(p => p.Id) + 1;

            model.Id = newId;
            model.Value = $"value-{newId}";
            sources.Add(model);

            return newId;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public bool Put(int id, [FromBody]DummyData value)
        {
            return true;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var success = DataManager.DataList.RemoveAll(p => p.Id == id);
            return success > 0;
        }
    }

    public static class DataManager
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
