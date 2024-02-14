using DomainModel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.DataAccess.Interfaces
{
    public interface IAssetsDAO
    {
        List<Asset> GetAssets();
        bool AddAsset(Asset asset);

        public Asset? GetById(int Id);

        public bool DeleteAsset(int Id);
    }
}
