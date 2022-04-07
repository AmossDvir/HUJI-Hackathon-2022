import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Checkbox } from "@mui/material";
const Filters = () => {
    const [injuryType, setInjuryType] = useState('');
    const [district, setDistrict] = useState('');
    const [service, setservice] = useState('');

    const handleInjuryChange = (e) => {
        setInjuryType(e.target.value);
    }
    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
    };
    const handleserviceChange = (e) => {
        setservice(e.target.value);
    };
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Injury Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={injuryType}
                    label="Injury Type"
                    onChange={handleInjuryChange}
                >
                    <MenuItem value={10}>Broken bone</MenuItem>
                    <MenuItem value={20}>Chest pain</MenuItem>
                    <MenuItem value={30}>Else</MenuItem>
                </Select>

            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">District</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={district}
                    label="District"
                    onChange={handleDistrictChange}
                >
                    <MenuItem value={10}>Jerusalem</MenuItem>
                    <MenuItem value={20}>North</MenuItem>
                    <MenuItem value={30}>Central Israel</MenuItem>
                    <MenuItem value={40}>South</MenuItem>
                </Select>

            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Service Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={service}
                    label="Service Type"
                    onChange={handleserviceChange}
                >
                    <MenuItem value={10}>Hospital</MenuItem>
                    <MenuItem value={20}>Terem</MenuItem>
                    <MenuItem value={30}>Bikor Rofe</MenuItem>
                </Select>

            </FormControl>

        </div>
    )
};

export default Filters;