using Azure;
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

        [HttpGet("{id}")]
        public ActionResult GetAssetById(int id)
        {
            Asset? asset = _assetsLogic.GetById(id);
            if (asset == null)
            {
                return NotFound();
            }
            return Ok(asset);
        }

        [HttpPatch("UpdateAsset/{id}")]
        public ActionResult UpdateAsset(int id, string newName, string CounterPart, string Area, string AssetType, string TechnologyType, decimal Capacity, DateTime ContractStart, DateTime ContractEnd)
        {
            Asset? updatedAsset = _assetsLogic.UpdateAsset(id, newName, CounterPart, Area, AssetType, TechnologyType, Capacity, ContractStart, ContractEnd);
            if (updatedAsset == null)
            {
                return NotFound();
            }
            return Ok(updatedAsset);
        }


        [HttpDelete("Delete")]
        public ActionResult Delete(int id)
        {
            Asset? asset = _assetsLogic.GetById(id);
            if (asset == null)
            {
                return NotFound();
            }
            _assetsLogic.DeleteAsset(id);

            var response = new HttpResponseMessage();
            response.Headers.Add("DeleteMessage", "Successfully Deleted.");
            return Ok(response);
        }
    }
}