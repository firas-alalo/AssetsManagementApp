using BusinessLogicLayer.Implementation;
using BusinessLogicLayer.Interfaces;
using DataAccessLayer.DataAccess;
using DataAccessLayer.DataAccess.Implementations;
using DataAccessLayer.DataAccess.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register services in the ASP.NET Core dependency injection container (IServiceCollection)
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDataAccessServices();
    builder.Services.AddScoped<IAssetsDAO, AssetDAO>();
    builder.Services.AddScoped<IAssetsLogic, AssetsLogic>();



    builder.Services.AddCors(options =>
	{

		options.AddDefaultPolicy(
			policy =>
			{
				policy.AllowAnyOrigin()
					.AllowAnyHeader()
					.AllowAnyMethod();
			});
	});
}

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}
app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
