import * as React from 'react';
import Grid from '@mui/material/Grid';
import AssetsTable from '../Components/AssetsTable';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
//import AssetDrawer from './AssetDrawer';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';

function HomeGrid() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="center" sx={{ gap: 3 }}>
            <Grid item sx={{ flexGrow: 1, maxWidth: '1300px' }}>
                <AssetsTable />
                {/*    <AssetDrawer />*/}
                <Grid container direction={isMobile ? 'column' : 'row'} alignItems="center" justifyContent="center" sx={{ gap: 3 }} marginTop="3%">
                    <Link to="/Asset">
                        <AddButton />
                    </Link>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default HomeGrid;
