using DomainModel.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace DataAccessLayer.DataAccess.Implementations
{
	public class AssetDAO : DBConnection
	{
		public List<Asset> GetAssets()
		{
			SqlConnection conn = new(_connectionStringBuilder.ConnectionString);
			conn.Open();

			SqlCommand cmd = conn.CreateCommand();
			cmd.CommandText = "Select * from dbo.Assets";
			SqlDataReader reader = cmd.ExecuteReader();
			List<Asset> list = new();

			while (reader.Read())
			{
				Asset asset = new()
				{
					//Id = reader.GetInt32(0),
					Name = reader.GetString(1),
					//Notes = reader.IsDBNull("notes") ? null : reader.GetString(2),
					Capacity = reader.GetDecimal(3),
					//Location_Longitude = reader.IsDBNull("Location_Longitude") ? null : reader.GetDecimal(4),
					//Location_Latitude = reader.IsDBNull("Location_Latitude") ? null : reader.GetDecimal(5),
					ContractStart = DateOnly.FromDateTime(reader.GetDateTime(6)),
					ContractEnd = DateOnly.FromDateTime(reader.GetDateTime(7)),
					//ApprovedBy = reader.GetString(8),
					//ApprovedAt = reader.GetDateTime(9),
					//ModifiedBy = reader.GetString(10),
					//ModifiedAt = reader.GetString(11),
					CounterPart = reader.GetString(12),
					Area = reader.GetString(13),
					AssetType = reader.GetString(14),
					TechnologyType = reader.GetString(15),
					CurrentState = reader.GetString(16)
				};
				list.Add(asset);
			}
			conn.Close();
			return list;
		}
	}
}


