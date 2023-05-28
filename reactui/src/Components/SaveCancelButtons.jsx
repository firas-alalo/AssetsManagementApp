import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function SaveCancelButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Link to="/">
            <Button variant="outlined" color="error" sx={{ width: '150px' }}>
                Cancel
                </Button>
            </Link>
            <Button variant="contained" color="success" sx={{ width: '150px' }}>
                Save
            </Button>
        </Stack>
    );
}

export default SaveCancelButtons;
