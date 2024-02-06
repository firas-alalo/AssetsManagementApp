import * as React from 'react';
import Grid from '@mui/material/Grid';
import AssetsTable from '../Components/AssetsTable';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import "../App.css"
function HomeGrid() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="center" sx={{ gap: 3 }}>
            <Grid item sx={{ flexGrow: 1, maxWidth: '1300px' }}>
                <Grid container direction={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="right" sx={{ gap: 3 }} marginBottom="3%">
                    <Grid container direction={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="left" sx={{ gap: 3 }} marginBottom="0%">
                        <h1 className="titles">Assets</h1>
                    </Grid>
                    <Link to="/Asset">
                        <AddButton />
                    </Link>
                </Grid>
                <AssetsTable />
            </Grid>
        </Grid>
    );
}

export default HomeGrid;
