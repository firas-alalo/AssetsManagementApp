import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const AssetDropDown = (props) => {
    const getOptions = () => {
        switch (props.type) {
            case "TechType":
                return ["Solar", "Hydro", "Wind"];
            case "Area":
                return ["Denmark", "Norway", "Sweden", "Germany", "France", "Spain"];
            case "CounterPart":
                return ["Total Energy", "Sunshine Solar"];
            case "AssetType":
                return ["Production", "Consumption"];
            default:
                return [];
        }
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    {props.type}
                </InputLabel>
                <NativeSelect
                    onChange={props.onChange}
                    inputProps={{
                        name: '',
                        id: props.type,
                    }}
                >
                    <option></option>
                    {getOptions().map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </Box>
    );
}

export default AssetDropDown;
