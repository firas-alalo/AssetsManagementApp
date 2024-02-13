using DomainModel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Interfaces
{
    public interface IAssetsLogic
    {
        public List<Asset> GetAllAssets();
        public bool AddAsset(Asset asset);

        public Asset? GetById(int Id);
    }
}
