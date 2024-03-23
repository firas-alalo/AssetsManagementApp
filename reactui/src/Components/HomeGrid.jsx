import * as React from "react";
import Grid from "@mui/material/Grid";
import AssetsTable from "../Components/AssetsTable";
import SideMenu from "./SideMenu";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import {
  AssetDeleteException,
  AssetUpdateException,
  AssetsFetchException,
} from "../Exceptions/CRUDExceptions";

/**
 * HomeGrid component
 * @component
 *
 * @description
 * HomeGrid component is the parent component for the home page.
 * It contains the SideMenu and AssetsTable components.
 *
 * @returns {JSX.Element}
 */
const HomeGrid = () => {
  const [isEditWindowOpen, setIsEditWindowOpen] = useState(false);
  const [updatedAsset, setUpdatedAsset] = useState({});
  const [assets, setAssets] = useState([]);

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
        throw new AssetsFetchException("Error fetching assets");
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
    } catch {
      throw new AssetUpdateException("Error updating asset");
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://localhost:7197/Assets/Delete?id=${id}`)
      .then(() => {
        fetchAssets();
      })
      .catch((error) => {
        throw new AssetDeleteException("Error deleting asset");
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
        <Grid item xs={2}>
          <SideMenu />
        </Grid>

        <Grid item xs={10}>
          <Navbar />
          <Grid marginTop={5}>
            <AssetsTable
              data={assets}
              updateAsset={openEditWindow}
              updateCallback={onUpdate}
              fetchAssets={fetchAssets}
              handleDelete={handleDelete}
            />
          </Grid>
          {isEditWindowOpen && (
            <>
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
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeGrid;
