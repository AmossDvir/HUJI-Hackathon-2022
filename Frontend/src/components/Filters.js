import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const Filters = () => {
    const [injuryType, setInjuryType] = useState('');
    const [district, setDistrict] = useState('')
    const handleInjuryChange = (e) => {
        setInjuryType(e.target.value);
    }
    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
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


        </div>
    )
};

export default Filters;