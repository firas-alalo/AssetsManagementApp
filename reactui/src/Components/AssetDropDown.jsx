import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const AssetDropDown = (props) => {
    const getOptions = () => {
        if (props.type === "TechType") {
            return ["Solar", "Hydro", "Wind"];
        }

        if (props.type === "Area") {
            return ["Denmark", "Germany", "Sweden"];
        }

        if (props.type === "CounterPart") {
            return ["Total Energy", "Sunshine Solar"];
        }

        if (props.type === "AssetType") {
            return ["Production", "Consumption"];
        }

    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    {props.type}
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: '',
                        id: 'uncontrolled-native',
                    }}
                >
                    {getOptions().map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </Box>
    );
}

export default AssetDropDown;
