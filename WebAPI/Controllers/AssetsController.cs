using DataAccessLayer.DataAccess.Implementations;
using DomainModel.Models;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class AssetsController : ControllerBase
	{
		AssetDAO _assetDAO = new AssetDAO();

		[HttpGet]
		public List<Asset> GetAllAssets()
		{
			return _assetDAO.GetAssets();
		}
	}
}