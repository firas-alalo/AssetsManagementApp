import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AssetDropDown from "./AssetDropDown";
import NameTextField from "./NameTextField";
import MultiDatePicker from "./DatePicker";
import LocationTextField from "./LocationTextFields";
import CapacityAmount from "./CapacityAmount";
import Grid from "@mui/material/Grid";
import NotesTextField from "./NotesTextField";
import { SaveButton, CancelButton } from "./SaveCancelButtons";
import dayjs from "dayjs";
import axios from "axios";
import { useState } from "react";
import { SuccessMessage, FailedMessage } from "./ResultMessage";

const AssetForm = () => {
  const [resultMessage, setResultMessage] = useState("");

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
  const [asset, setAsset] = useState(defaultAsset);

  const handleSubmit = () => {
    if (asset.contractStart.isAfter(asset.contractStart)) {
      setResultMessage("warning");
    }

    axios
      .post("https://localhost:7197/Assets/Add", asset)
      .then((response) => {
        console.log(response);
        setResultMessage("success");
      })
      .catch((error) => {
        console.error(error.response);
        setResultMessage("failed");
      });
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
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
  }

  function onSelectChange(event) {
    console.log(event.target.name, event.target.value);
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
  }

  return (
    <Card
      sx={{
        maxWidth: "800px",
        height: "100%",
        backgroundColor: "white",
        border: "1px solid black",
        p: "20px",
        marginTop: "5%",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 25, m: 1, marginBottom: 5 }}
          align="center"
          color="black"
          gutterBottom
        >
          Create Asset
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
            <AssetDropDown
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
          <Grid item xs={12}>
            <Grid container spacing={4} justifyContent="center" marginTop="1px">
              <Grid item>
                <CancelButton />
              </Grid>
              <Grid item>
                <SaveButton onSubmit={handleSubmit}></SaveButton>
              </Grid>
            </Grid>
            <Grid
              display="flex"
              justifyContent="center"
              align="center"
              marginTop="2%"
            >
              {resultMessage === "success" && <SuccessMessage />}
              {resultMessage === "failed" && <FailedMessage />}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AssetForm;
