using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

namespace DomainModel.Models
{
    public class Asset
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Notes { get; set; }
        public decimal Capacity { get; set; }
        public decimal? Location_Longitude { get; set; }
        public decimal? Location_Latitude { get; set; }
        public DateTime ContractStart { get; set; }
        public DateTime ContractEnd { get; set; }
        public string ApprovedBy { get; set; }
        public DateTime ApprovedAt { get; set; }
        public string ModifiedBy { get; set; }
        public string ModifiedAt { get; set; }
		public string CounterPart { get; set; }
        public string Area { get; set; }
        public string AssetType { get; set; }
        public string TechnologyType { get; set; }
        public string CurrentState { get; set; }
    }

    //public class testing
    //{
    //    public void test()
    //    {
    //        Asset firas = new Asset();
    //        firas.currentState = State.Draft;
    //    }
    //}
}



