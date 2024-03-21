import * as React from "react";
import Grid from "@mui/material/Grid";
import AssetsTable from "../Components/AssetsTable";
import SideMenu from "./SideMenu";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";

function HomeGrid() {
  const [isEditWindowOpen, setIsEditWindowOpen] = useState(false);
  const [updatedAsset, setUpdatedAsset] = useState({});
  const [assets, setAssets] = useState([]);
  const [deletedAsset, setDeletedAsset] = useState([]);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    axios
      .get("https://localhost:7197/Assets")
      .then((response) => {
        setAssets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use updatedAsset.id to reference the correct asset to update
      await axios.patch(
        `https://localhost:7197/Assets/UpdateAsset/${
          updatedAsset.id
        }?newName=${encodeURIComponent(updatedAsset.name)}`
      );
      fetchAssets();
      setIsEditWindowOpen(false);
    } catch (error) {
      console.error("An error occurred while updating the asset:", error);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://localhost:7197/Assets/Delete?id=${id}`)
      .then(() => {
        console.log("Asset deleted successfully");
        setDeletedAsset((prevAssets) =>
          prevAssets.filter((asset) => asset.id !== id)
        );
        fetchAssets();
      })
      .catch((error) => {
        console.error("Error deleting asset:", error);
      });
  };

  const openEditWindow = (asset) => {
    if (isEditWindowOpen) return;
    setUpdatedAsset(asset);
    setIsEditWindowOpen(true);
  };

  const closeEditWindow = () => {
    setIsEditWindowOpen(false);
    setUpdatedAsset({});
  };

  const onUpdate = () => {
    closeEditWindow();
    fetchAssets();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={2} marginTop="4%">
          <SideMenu />
        </Grid>

        <Grid item xs={10} marginTop="4%">
          <AssetsTable
            data={assets}
            updateAsset={openEditWindow}
            updateCallback={onUpdate}
            fetchAssets={fetchAssets}
            handleDelete={handleDelete}
          />
          {isEditWindowOpen && (
            <div className="edit-window">
              <div className="modal-content">
                <span className="close" onClick={closeEditWindow}>
                  &times;
                </span>
                <form onSubmit={handleSubmit}>
                  <h3>Update Asset | ID: {updatedAsset.id}</h3>
                  <div>
                    <TextField
                      sx={{
                        width: "100%",
                        marginBottom: "5px",
                      }}
                      label="Name"
                      focused
                      id="name"
                      value={updatedAsset.name || ""}
                      onChange={(e) =>
                        setUpdatedAsset({
                          ...updatedAsset,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button className="edit-window-update-button" type="submit">
                    Update
                  </button>
                </form>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeGrid;
