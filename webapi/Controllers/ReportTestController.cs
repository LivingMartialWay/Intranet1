using Microsoft.AspNetCore.Mvc;
using IntranetLibrary.DataAccess;
using IntranetLibrary.Models;

namespace ReportTest.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ReportTestController : ControllerBase
{
    private readonly IReportTestData _data;
    private readonly int userId;

    public ReportTestController (IReportTestData data)
    {
        _data = data;

    }

    // GET: api/ReportTest
    [HttpGet]
    public async Task<ActionResult<List<ReportTestModel>>> Get()
    {
        var output =  await _data.GetAllAssigned();

        return Ok(output);
    }

    // GET api/ReportTest/5
    [HttpGet("{RecNo}")]
    public async Task<ActionResult<ReportTestModel>> Get(int RecNo)
    {
        var output = await _data.GetOneAssigned(RecNo);

        return Ok(output);
    }

    // POST api/ReportTest !
    [HttpPost]
    public async Task<ActionResult<ReportTestModel>> Post(string? DeliveryType, DateTime? DeliveredWhen, string? DeliveredBy, string BusinessName, string? DeliveredTo, string? ItemType, string? CheckNo, string? RecievedBy, string? ProcessedBy, DateTime? ProcessedDate)
    {
        try
        {
            var output = await _data.Create(DeliveryType, DeliveredWhen, DeliveredBy, BusinessName, DeliveredTo, ItemType, CheckNo, RecievedBy, ProcessedBy, ProcessedDate);

            return Ok(output);
        }
        catch (Exception ex)
        {
            return BadRequest();
        }
    }

    // PUT api/ReportTest/5
    [HttpPut("{RecNo}")]
    public IActionResult Put(int RecNo, [FromBody] string value)
    {
        throw new NotImplementedException();
    }

    // PUT api/ReportTest/5/Complete
    [HttpPut("{RecNo}/Complete")]
    public IActionResult Complete(int RecNo)
    {
        throw new NotImplementedException();
    }

    // DELETE api/ReportTest/5
    [HttpDelete("{RecNo}")]
    public IActionResult Delete(int RecNo)
    {
        throw new NotImplementedException();
    }
}
