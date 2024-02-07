import * as React from 'react';
import Grid from '@mui/material/Grid';
import AssetsTable from '../Components/AssetsTable';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';

function HomeGrid() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="center" sx={{ gap: 3 }}>
            <Grid item sx={{ flexGrow: 1, maxWidth: '1400px' }}>
                <Grid container direction={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="space-between" display="flex">
                    <h1 className="titles">Overview</h1>
                    <Link to="/Asset">
                        <AddButton />
                    </Link>
                    <AssetsTable />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HomeGrid;
