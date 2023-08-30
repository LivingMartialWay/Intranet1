using Microsoft.AspNetCore.Mvc;
using IntranetLibrary.DataAccess;
using IntranetLibrary.Models;


namespace User.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly UserData _data;
    
    public UserController (UserData data)
    {
        _data = data;

    }

    // GET: api/User
    [HttpGet]
    public async Task<ActionResult<UserModel>> Get()
    {
        //var output = await _data.GetOneAssigned();

        return Ok("output");
    }

}
