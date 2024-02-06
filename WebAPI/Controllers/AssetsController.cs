using BusinessLogicLayer.Interfaces;
using DataAccessLayer.DataAccess.Implementations;
using DataAccessLayer.DataAccess.Interfaces;
using DomainModel.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebAPI.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class AssetsController : ControllerBase
	{
		IAssetsLogic _assetsLogic;

        public AssetsController(IAssetsLogic assetsLogic)
        {
            _assetsLogic = assetsLogic;
        }

        [HttpGet]
		public List<Asset> GetAllAssets()
		{
			return _assetsLogic.GetAllAssets();
		}

		[HttpPost]
		[Route("Add")]
		public ActionResult CreateAsset(Asset asset)
		{
			bool success = _assetsLogic.AddAsset(asset);
			if (!success)
			{
				return BadRequest();
			}
			return Ok(asset);
		}
	}
}