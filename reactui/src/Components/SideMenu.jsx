﻿import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
        backgroundColor: "#f5f5f5",
        border: "1px solid #d3d3d3",
      }}
    >
      <MenuList>
        <h2
          style={{
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            color: "black",
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

        <ListItem component={Link} to="/" sx={{ marginTop: "10px" }}>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText>View</ListItemText>
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
