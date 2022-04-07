import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const Filters = () => {
    const [InjuryType, setAge] = useState('');
    const handleChange = (e) => {
        setAge(e.target.value);
    };
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Injury Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={InjuryType}
                    label="Injury Type"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>pain in the ass</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>


        </div>
    )
};

export default Filters;