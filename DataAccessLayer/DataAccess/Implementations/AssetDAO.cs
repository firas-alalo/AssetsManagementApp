using DataAccessLayer.DataAccess.Interfaces;
using DomainModel.Models;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Data.Common;
using System.Xml.Linq;

namespace DataAccessLayer.DataAccess.Implementations
{
    public class AssetDAO : IAssetsDAO
    {
        private readonly DataContext _context;

        public AssetDAO(DataContext context)
        {
            _context = context;
        }

        public List<Asset> GetAssets()
        {
            SqlConnection conn = _context.CreateConnection();
            conn.Open();

            SqlCommand cmd = conn.CreateCommand();
            cmd.CommandText = "Select * from dbo.Assets";
            SqlDataReader reader = cmd.ExecuteReader();
            List<Asset> list = new();

            while (reader.Read())
            {
                Asset asset = new()
                {
                    Id = reader.GetInt32(0),
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
            SqlConnection conn = _context.CreateConnection();
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

        public Asset? GetById(int Id)
        {
            SqlConnection conn = _context.CreateConnection();
            conn.Open();
            SqlCommand cmd = conn.CreateCommand();
            cmd.CommandText = "SELECT * FROM Assets WHERE Id = @Id";
            cmd.Parameters.AddWithValue("Id", Id);
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.Read())
            {
                Asset? assetId = new Asset
                {
                    Id = (int)reader["Id"],
                    Name = (string)reader["Name"],
                    Capacity = (Decimal)reader["Capacity"],
                    ContractStart = (DateTime)reader["ContractStart"],
                    ContractEnd = (DateTime)reader["ContractEnd"],
                    CounterPart = (string)reader["CounterPart"],
                    Area = (string)reader["Area"],
                    AssetType = (string)reader["AssetType"],
                    TechnologyType = (string)reader["TechnologyType"],
                    CurrentState = (string)reader["TechnologyType"]
                };
                return assetId;
            }
            return null;
        }

        public Asset? UpdateAsset(int id, string newName, string CounterPart, string Area, string AssetType, string TechnologyType, decimal Capacity)
        {
            try
            {
                using (SqlConnection conn = _context.CreateConnection())
                {
                    conn.Open();

                    SqlCommand cmd = conn.CreateCommand();
                    cmd.CommandText = "UPDATE Assets SET Name = @Name, CounterPart = @CounterPart, Area = @Area, AssetType = @AssetType, TechnologyType = @TechnologyType, Capacity = @Capacity WHERE Id = @Id";
                    cmd.Parameters.AddWithValue("@Id", id);
                    cmd.Parameters.AddWithValue("@Name", newName);
                    cmd.Parameters.AddWithValue("@CounterPart", CounterPart);
                    cmd.Parameters.AddWithValue("Area", Area);
                    cmd.Parameters.AddWithValue("AssetType", AssetType);
                    cmd.Parameters.AddWithValue("TechnologyType", TechnologyType);
                    cmd.Parameters.AddWithValue("Capacity", Capacity);

                    int rowsAffected = cmd.ExecuteNonQuery();

                    if (rowsAffected > 0)
                    {
                        return new Asset { Id = id, Name = newName, CounterPart = CounterPart, Area = Area, AssetType =  AssetType, TechnologyType = TechnologyType, Capacity = Capacity };
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("An error occurred: " + ex.Message);
            }

            return null;
        }


        public bool DeleteAsset(int Id)
        {
            Asset? asset = null;
            asset = GetById(Id);
            SqlConnection conn = _context.CreateConnection();
            conn.Open();
            SqlCommand cmd = conn.CreateCommand();
            cmd.CommandText = "DELETE FROM Assets WHERE Id = @Id";
            cmd.Parameters.AddWithValue("@Id", Id);
            int rowsAffected = cmd.ExecuteNonQuery();
            return rowsAffected == 1;
        }
    }
}


