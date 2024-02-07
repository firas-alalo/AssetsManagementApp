import * as React from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AssetForm from '../Components/AssetForm';

function AssetGrid() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="center" sx={{ gap: 3, marginTop:"2%" }}>
            <Grid item sx={{ maxWidth: '1300px' }}>
                <AssetForm />
            </Grid>
        </Grid>
    );
}

export default AssetGrid;
