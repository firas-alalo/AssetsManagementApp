import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <Typography
          sx={{ padding: "10px", marginBottom: "10px", fontWeight: "bold" }}
        >
          Control Panel
        </Typography>
        <MenuItem component={Link} to="/">
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText>View Assets</ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem component={Link} to="/Asset">
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>Add New Asset</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default SideMenu;
