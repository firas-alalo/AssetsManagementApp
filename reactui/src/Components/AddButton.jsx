import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddButton = () => {
    return (
        <Button variant="contained" size="large" startIcon={<CloudUploadIcon />} sx={{ backgroundColor:"green" }} >
            Add New Asset
        </Button>
    );
}

export default AddButton;