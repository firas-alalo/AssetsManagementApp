import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogActions from "@mui/material/DialogActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AssetDropDown from "./AssetDropDown";
import NameTextField from "./NameTextField";
import MultiDatePicker from "./DatePicker";
import LocationTextField from "./LocationTextFields";
import CapacityAmount from "./CapacityAmount";
import Grid from "@mui/material/Grid";
import NotesTextField from "./NotesTextField";
import dayjs from "dayjs";
import ResultMessage from "./ResultMessage";
import ListItemText from "@mui/material/ListItemText";
import ProgressSpinner from "./ProgressSpinner";
import CountriesList from "./CountriesList";

/**
 * AssetFormDialog component
 * @component
 *
 * @description
 * AssetFormDialog component is a dialog that allows the user to create a new asset.
 */
const AssetFormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [confirmationOpen, setConfirmationOpen] = React.useState(false); // State for confirmation dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [inProgress, setInProgress] = useState(false);
  const [resultMessage, setResultMessage] = useState({
    show: false,
    message: "",
    severity: "",
  });
  const defaultAsset = {
    name: "",
    notes: "",
    capacity: "",
    location_Longitude: 0,
    location_Latitude: 0,
    contractStart: dayjs(),
    contractEnd: dayjs(),
    approvedBy: "",
    approvedAt: dayjs(),
    modifiedBy: "",
    modifiedAt: "",
    counterPart: "",
    area: "",
    assetType: "",
    technologyType: "",
    currentState: "Draft",
  };
  const resetForm = () => setAsset(defaultAsset);
  const [asset, setAsset] = useState(defaultAsset);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handleConfirmationOpen = () => {
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const confirmSubmit = () => {
    if (asset.contractStart.isAfter(asset.contractStart)) {
      setResultMessage("warning");
    }

    setConfirmationOpen(false);
    setInProgress(true);

    axios
      .post("https://localhost:7197/Assets/Add", asset)
      .then((response) => {
        setResultMessage({
          show: true,
          message: "Asset created successfully",
          severity: "success",
        });
        setInProgress(false);
      })
      .catch((error) => {
        console.error(error.response);
        setResultMessage({
          show: true,
          message: "Failed to create asset",
          severity: "error",
        });
        setInProgress(false);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "contractStart") {
      setAsset((prevState) => ({
        ...prevState,
        contractStart: value,
      }));
    } else {
      setAsset((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onSelectChange = (event) => {
    switch (event.target.id) {
      case "TechType":
        setAsset((prevState) => ({
          ...prevState,
          technologyType: event.target.value,
        }));
        break;
      case "Area":
        setAsset((prevState) => ({
          ...prevState,
          area: event.target.value,
        }));
        break;
      case "CounterPart":
        setAsset((prevState) => ({
          ...prevState,
          counterPart: event.target.value,
        }));
        break;
      case "AssetType":
        setAsset((prevState) => ({
          ...prevState,
          assetType: event.target.value,
        }));
        break;
      default:
    }
  };

  return (
    <>
      <ListItemText onClick={handleClickOpen} sx={{ color: "white" }}>
        Add
      </ListItemText>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Create New Asset
        </DialogTitle>
        <DialogContent>
          <Card>
            <CardContent>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={8}>
                  <NameTextField
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Name of the asset: "
                    value={asset.name}
                    onChange={handleInputChange}
                  />

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <MultiDatePicker
                        name="contractStart"
                        onChange={handleInputChange}
                        onDayCountChange={handleInputChange}
                        value={asset.contractStart}
                        asset={asset}
                        setAsset={setAsset}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <NotesTextField
                      type="text"
                      name="notes"
                      value={asset.notes}
                      onChange={handleInputChange}
                      label="Notes"
                      placeholder="Notes about the asset"
                    />
                  </Grid>

                  <LocationTextField
                    value={`${asset.location_Longitude} ${asset.location_Latitude}`}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <AssetDropDown
                    key="counterPart"
                    type={"CounterPart"}
                    value={asset.counterPart}
                    onChange={onSelectChange}
                  />
                  <CountriesList
                    key="area"
                    type={"Area"}
                    value={asset.area}
                    onChange={onSelectChange}
                  />
                  <AssetDropDown
                    key="assetType"
                    type={"AssetType"}
                    value={asset.assetType}
                    onChange={onSelectChange}
                  />
                  <AssetDropDown
                    key="technologyType"
                    type={"TechType"}
                    value={asset.technologyType}
                    onChange={onSelectChange}
                  />
                  <CapacityAmount
                    type="text"
                    name="capacity"
                    label="Capacity *"
                    value={asset.capacity}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid
                  display="flex"
                  justifyContent="center"
                  align="center"
                  marginTop="2%"
                  item
                  xs={12}
                >
                  <DialogActions>
                    <Button
                      variant="contained"
                      color="error"
                      autoFocus
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleConfirmationOpen}
                      disabled={inProgress}
                    >
                      Confirm
                    </Button>
                    <Dialog
                      open={confirmationOpen}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        id="alert-dialog-title"
                        sx={{ height: "1px" }}
                      >
                        {"Are you sure?"}
                      </DialogTitle>
                      <DialogContent></DialogContent>
                      <DialogActions sx={{ gap: "15px" }}>
                        <Button
                          color="error"
                          variant="outlined"
                          name="buttonNo"
                          onClick={handleConfirmationClose}
                        >
                          No
                        </Button>
                        <Button
                          variant="contained"
                          color="success"
                          name="buttonYes"
                          onClick={confirmSubmit}
                          autoFocus
                        >
                          Yes
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </DialogActions>
                </Grid>
                {inProgress && <ProgressSpinner />}
              </Grid>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
      {resultMessage.show && (
        <ResultMessage
          message={resultMessage.message}
          severity={resultMessage.severity}
          onClose={() => {
            setResultMessage({ show: false });
            if (resultMessage.severity === "success") {
              handleClose();
              window.location.reload();
            }
          }}
        />
      )}
    </>
  );
};

export default AssetFormDialog;
