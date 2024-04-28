import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import AssetFormDialog from "./AssetFormDialog";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItem from "@mui/material/ListItem";

/**
 * @returns {ReactElement} SideMenu component
 *
 * @description This component is a side menu that contains the following:
 * - Dashboard
 * - View
 * - Add
 */
const SideMenu = () => {
  return (
    <Paper
      sx={{
        height: "100vh",
        backgroundColor: "#990011FF",
        borderRadius: "0px",
        maxWidth: "350px",
      }}
    >
      <MenuList>
        <h2
          style={{
            fontWeight: "bold",
            alignItems: "center",
            display: "flex",
            color: "white",
            marginRight: "20px",
            marginBottom: "25px",
            marginTop: "20px",
          }}
        >
          <ListItemIcon
            sx={{
              justifyContent: "center",
            }}
          >
            <SettingsIcon />
          </ListItemIcon>
          Dashboard
        </h2>

        <ListItem component={Link} to="/home" sx={{ marginTop: "10px" }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }}>Home</ListItemText>
        </ListItem>

        <Divider />

        <ListItem style={{ cursor: "pointer" }}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <AssetFormDialog />
        </ListItem>
      </MenuList>
    </Paper>
  );
};

export default SideMenu;
