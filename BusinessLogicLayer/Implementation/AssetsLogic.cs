using BusinessLogicLayer.Interfaces;
using DataAccessLayer.DataAccess.Interfaces;
using DomainModel.Models;

namespace BusinessLogicLayer.Implementation
{
    public class AssetsLogic : IAssetsLogic
    {
        private readonly IAssetsDAO assetsDAO;

        public AssetsLogic(IAssetsDAO assetsDAO)
        {
            this.assetsDAO = assetsDAO;
        }

        public List<Asset> GetAllAssets()
        {
            return assetsDAO.GetAssets();
        }

        public bool AddAsset(Asset asset) 
        { 
            return assetsDAO.AddAsset(asset);
        }

        public Asset? GetById(int Id)
        {
            return assetsDAO?.GetById(Id);
        }
    }
}
