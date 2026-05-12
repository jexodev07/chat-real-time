using chat_real_time.Models;
using Microsoft.AspNetCore.Mvc;

namespace chat_real_time.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController: ControllerBase
{

    [HttpGet("List")]
    public async Task<ActionResult> List()
    {
        return Ok(new List<object> {
            new { username = "test1", password = "123" },
            new { username = "test2", password = "456" },
            new { username = "test3", password = "789" },
            new { username = "test4", password = "159" },
        });
    }

    [HttpPost("Register")]
    public async Task<ActionResult> Register([FromBody] UserModel.Register model)
    {
        if (model.Password != model.ConfirmPassword)
        {
            return BadRequest("Las contraseñas deben de ser iguales");
        }
        return Ok($"Usuario {model.Username} registrado");
    }
    
    [HttpPost("Login")]
    public async Task<ActionResult> Login([FromBody] UserModel.Login model)
    {
        return Ok($"Usuario {model.Username} logueado");
    }
}