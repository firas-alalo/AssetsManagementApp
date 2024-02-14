import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CategoryIcon from '@mui/icons-material/Category';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "black" }}>
                <Toolbar>
                    <CategoryIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Assets Management App
                    </Typography>
                    <Button href="/" sx={{ color: "white", weight:"30" }}>Home</Button>
                    <Button sx={{ color: "white" }}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;