var builder = WebApplication.CreateBuilder(args);

string? allowedOrigins = builder.Configuration.GetValue<string>("AllowedOrigins");

builder.Services.AddControllers();

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(
        policy => {
            if (string.IsNullOrEmpty(allowedOrigins))
            {
                policy.AllowAnyOrigin();
            }
            else
            {
                policy.WithOrigins(allowedOrigins);
            }
            policy.AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        }
    );
});

var app = builder.Build();

app.UseCors();
app.MapControllers();
app.Run();
