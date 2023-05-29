using DataAccessLayer.DataAccess.Implementations;
using DomainModel.Models;
using Microsoft.AspNetCore.Mvc;
using System;

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

		[HttpPost]
		[Route("Add")]
		public ActionResult CreateAsset(Asset asset)
		{
			bool success = _assetDAO.AddAsset(asset);
			if (!success)
			{
				return BadRequest();
			}
			return Ok(asset);
		}
	}
}