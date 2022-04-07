import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Checkbox } from "@mui/material";
import { Slider } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Filters.css";
const Filters = () => {
    const [injuryType, setInjuryType] = useState('');
    const [waitingtime, setWaitingtime] = useState('')
    const [district, setDistrict] = useState('');
    const [service, setservice] = useState('');
    const [expanded, setExpanded] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);

    const handleDistanceChange = (p) => (e, isExpanded) =>{
        setExpanded(isExpanded ? p : false);
    };
    const handleInjuryChange = (e) => {
        setInjuryType(e.target.value);
    };
    const handleTimeChange = (e) => {
        setWaitingtime(e.target.value);
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
                <InputLabel id="demo-simple-select-label">wished waiting time</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={waitingtime}
                    label="Wished waiting time"
                    onChange={handleTimeChange}
                    
                >
                    <MenuItem value={10}>1 Hour or less</MenuItem>
                    <MenuItem value={20}>1-3 Hours</MenuItem>
                    <MenuItem value={30}>3-6 Hours</MenuItem>
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
            <FormControl fullWidth>
            <Accordion expanded={expanded === 'panel1'} onChange={handleDistanceChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Set Distance
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{sliderValue}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Slider
                    aria-label="Distance"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={10}
                    getAriaValueText={(val) => setSliderValue(val+' km')}

                    marks={true}
                    min={0}
                    max={100}
                />
                </AccordionDetails>
            </Accordion>
            </FormControl>

        </div>
    )
};

export default Filters;