import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox } from "@mui/material";
import { Slider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Filters.css";
const Filters = ({
  careChoiceList,
  onCareSelection,
  serviceTypeList,
  onServiceTypeSelection,
}) => {
  const [injuryType, setInjuryType] = useState("");
  const [renderedCareChoiceList, setRenderedCareChoiceList] = useState([]);
  const [renderedServiceTypeList, setRenderedServiceTypeList] = useState([]);
  const [waitingtime, setWaitingtime] = useState("");
  const [district, setDistrict] = useState("");
  const [service, setService] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  useEffect(() => {
    setRenderedCareChoiceList(
      careChoiceList?.map((choice) => {
        return <MenuItem value={choice[1]}>{choice[1]}</MenuItem>;
      })
    );
  }, [careChoiceList]);

  useEffect(() => {
    setRenderedServiceTypeList(
      serviceTypeList?.map((choice) => {
        return <MenuItem value={choice[1]}>{choice[1]}</MenuItem>;
      })
    );
  }, [serviceTypeList]);

  const handleDistanceChange = (p) => (e, isExpanded) => {
    setExpanded(isExpanded ? p : false);
  };
  const handleInjuryChange = (e) => {
    setInjuryType(e.target.value);
    onCareSelection(e.target.value[0]);
  };
  const handleTimeChange = (e) => {
    setWaitingtime(e.target.value);
  };
  const handleServiceChange = (e) => {
    setService(e.target.value);
    onServiceTypeSelection(e.target.value[0]);
  };
  return (
    <div>
      <FormControl fullWidth className="field-selector">
        <InputLabel id="demo-simple-select-label">Injury Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={injuryType}
          label="Injury Type"
          onChange={handleInjuryChange}
        >
          {renderedCareChoiceList}
        </Select>
      </FormControl>
      <FormControl fullWidth className="field-selector">
        <InputLabel id="demo-simple-select-label">Service Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Service Type"
          onChange={handleServiceChange}
        >
          {renderedServiceTypeList}
        </Select>
      </FormControl>
      <FormControl fullWidth className="field-selector">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleDistanceChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Set Distance
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {sliderValue}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              aria-label="Distance"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={10}
              getAriaValueText={(val) => setSliderValue(val + " km")}
              marks={true}
              min={0}
              max={100}
            />
          </AccordionDetails>
        </Accordion>
      </FormControl>
    </div>
  );
};

export default Filters;
