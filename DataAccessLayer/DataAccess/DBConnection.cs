using Microsoft.Data.SqlClient;

namespace DataAccessLayer.DataAccess
{
	public class DBConnection
	{
		public static SqlConnectionStringBuilder _connectionStringBuilder = new()
		{
			DataSource = "hildur.ucn.dk",
			InitialCatalog = "DMA-CSD-S212_10201984",
			UserID = "DMA-CSD-S212_10201984",
			Password = "Password1!",
			Encrypt = false
		};
	}
}
