import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AssetDropDown from './AssetDropDown';
import NameTextField from './NameTextField';
import { StartDatePicker, EndDatePicker } from './DatePicker';
import LocationTextField from './LocationTextFields';
import CapacityAmount from './CapacityAmount';
import Grid from '@mui/material/Grid';
import NotesTextField from './NotesTextField';
import SaveCancelButtons from './SaveCancelButtons';

function AssetForm() {
    return (
        <Card sx={{ maxWidth: "100%", height: "100%", backgroundColor: "white", border: "1px solid gray", p: '20px' }}>
            <CardContent>
                <Typography sx={{ fontSize: 25, m: 1 }} align="center" color="black" gutterBottom>
                    {/* A title can be added here */}
                </Typography>
                <form>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8}>
                            <NameTextField />
                            <StartDatePicker />
                            <EndDatePicker />
                            <LocationTextField />
                            <CapacityAmount />
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ marginTop: '10px' }}>
                                <AssetDropDown type={"CounterPart"} />
                                <div style={{ marginTop: '10%' }}>
                                    <AssetDropDown type={"Area"} />
                                </div>
                                <div style={{ marginTop: '10%' }}>
                                    <AssetDropDown type={"AssetType"} />
                                </div>
                                <div style={{ marginTop: '10%' }}>
                                    <AssetDropDown type={"TechType"} />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <NotesTextField />
                            <SaveCancelButtons />
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
}

export default AssetForm;
