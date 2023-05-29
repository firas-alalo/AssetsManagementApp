using DomainModel.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Data;
using static Azure.Core.HttpHeader;

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
					ContractStart = reader.GetDateTime(6),
					ContractEnd = reader.GetDateTime(7),
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

		public bool AddAsset(Asset asset)
		{
			SqlConnection conn = new(_connectionStringBuilder.ConnectionString);
			conn.Open();

			SqlCommand cmd = conn.CreateCommand();

			cmd.CommandText = @"INSERT INTO Assets (Name, Notes, Capacity, Location_Longitude, Location_Latitude, ContractStart, ContractEnd, 
									ApprovedBy, ApprovedAt, ModifiedBy, ModifiedAt, CounterPart, Area, AssetType, TechnologyType, CurrentState)
                                    VALUES (@Name, @Notes, @Capacity, @Location_Longitude, @Location_Latitude, @ContractStart, @ContractEnd, 
									@ApprovedBy, @ApprovedAt, @ModifiedBy, @ModifiedAt, @CounterPart, @Area, @AssetType, @TechnologyType, @CurrentState)";
			cmd.Parameters.AddWithValue("Name", asset.Name);
			cmd.Parameters.AddWithValue("Notes", asset.Notes);
			cmd.Parameters.AddWithValue("Capacity", asset.Capacity);
			cmd.Parameters.AddWithValue("Location_Longitude", asset.Location_Longitude);
			cmd.Parameters.AddWithValue("Location_Latitude", asset.Location_Latitude);
			cmd.Parameters.AddWithValue("ContractStart", asset.ContractStart);
			cmd.Parameters.AddWithValue("ContractEnd", asset.ContractEnd);
			cmd.Parameters.AddWithValue("ApprovedBy", asset.ApprovedBy);
			cmd.Parameters.AddWithValue("ApprovedAt", asset.ApprovedAt);
			cmd.Parameters.AddWithValue("ModifiedBy", asset.ModifiedBy);
			cmd.Parameters.AddWithValue("ModifiedAt", asset.ModifiedAt);
			cmd.Parameters.AddWithValue("CounterPart", asset.CounterPart);
			cmd.Parameters.AddWithValue("Area", asset.Area);
			cmd.Parameters.AddWithValue("AssetType", asset.AssetType);
			cmd.Parameters.AddWithValue("TechnologyType", asset.TechnologyType);
			cmd.Parameters.AddWithValue("CurrentState", asset.CurrentState);


			int rowsAffected = cmd.ExecuteNonQuery();

			if (rowsAffected > 0)
			{
				Console.WriteLine("Data inserted successfully.");
			}
			else
			{
				Console.WriteLine("Failed to insert data.");
			}
			return true;
		}
	}
}


