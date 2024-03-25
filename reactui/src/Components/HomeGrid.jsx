import * as React from "react";
import Grid from "@mui/material/Grid";
import AssetsTable from "../Components/AssetsTable";
import SideMenu from "./SideMenu";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import AssetDropDown from "./AssetDropDown";
import { StartDate, EndDate } from "./UpdatingDatepicker";
import dayjs from "dayjs";
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
        }?newName=${encodeURIComponent(
          updatedAsset.name
        )}&CounterPart=${encodeURIComponent(
          updatedAsset.counterPart
        )}&Area=${encodeURIComponent(
          updatedAsset.area
        )}&AssetType=${encodeURIComponent(
          updatedAsset.assetType
        )}&TechnologyType=${encodeURIComponent(
          updatedAsset.technologyType
        )}&Capacity=${encodeURIComponent(
          updatedAsset.capacity
        )}&ContractStart=${encodeURIComponent(
          updatedAsset.contractStart
        )}&ContractEnd=${encodeURIComponent(updatedAsset.contractEnd)}`
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
    console.log(asset);
    setUpdatedAsset({
      ...asset,
      counterPart: asset.counterPart,
    });
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
            <div className="edit-window">
              <form onSubmit={handleSubmit} className="modal-content">
                <span className="close" onClick={closeEditWindow}>
                  &times;
                </span>
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
                  <AssetDropDown
                    id="counterPart"
                    key="counterPart"
                    type={"CounterPart"}
                    value={updatedAsset.counterPart}
                    onChange={(e) =>
                      setUpdatedAsset({
                        ...updatedAsset,
                        counterPart: e.target.value,
                      })
                    }
                  />
                  <AssetDropDown
                    key="area"
                    type={"Area"}
                    value={updatedAsset.area}
                    onChange={(e) =>
                      setUpdatedAsset({
                        ...updatedAsset,
                        area: e.target.value,
                      })
                    }
                  />
                  <AssetDropDown
                    key="assetType"
                    type={"AssetType"}
                    value={updatedAsset.assetType}
                    onChange={(e) =>
                      setUpdatedAsset({
                        ...updatedAsset,
                        assetType: e.target.value,
                      })
                    }
                  />
                  <AssetDropDown
                    key="technologyType"
                    type={"TechType"}
                    value={updatedAsset.technologyType}
                    onChange={(e) =>
                      setUpdatedAsset({
                        ...updatedAsset,
                        technologyType: e.target.value,
                      })
                    }
                  />
                  <StartDate
                    value={dayjs(updatedAsset.contractStart)}
                    onChange={(date) =>
                      setUpdatedAsset((prevAsset) => ({
                        ...prevAsset,
                        contractStart: date.add(1, "day"),
                      }))
                    }
                  />
                  <EndDate
                    value={dayjs(updatedAsset.contractEnd)}
                    onChange={(date) =>
                      setUpdatedAsset((prevAsset) => ({
                        ...prevAsset,
                        contractEnd: date.add(1, "day"),
                      }))
                    }
                  />

                  <TextField
                    sx={{
                      width: "100%",
                      marginTop: "15px",
                    }}
                    label="capacity"
                    focused
                    id="capacity"
                    value={updatedAsset.capacity || ""}
                    onChange={(e) =>
                      setUpdatedAsset({
                        ...updatedAsset,
                        capacity: e.target.value,
                      })
                    }
                  />
                </div>
                <button className="edit-window-update-button" type="submit">
                  Update
                </button>
              </form>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeGrid;
