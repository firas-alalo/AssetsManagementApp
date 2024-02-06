import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


function AddButton() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Create New Asset
                <VisuallyHiddenInput type="file" />
            </Button>

        </Box>
    );
}

export default AddButton;