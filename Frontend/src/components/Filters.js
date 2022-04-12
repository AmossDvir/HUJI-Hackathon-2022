import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Slider } from "@mui/material";
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
  setSliderValue,
  sliderValue,
  onSubmitClick
}) => {
  const [injuryType, setInjuryType] = useState("");
  const [renderedCareChoiceList, setRenderedCareChoiceList] = useState([]);
  const [renderedServiceTypeList, setRenderedServiceTypeList] = useState([]);
  const [service, setService] = useState("");
  const [expanded, setExpanded] = useState(false);
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

  const checkoutSubmit = () => {
    console.log(injuryType.length)
    injuryType && service ?onSubmitClick():onSubmitClick();
  }

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
        <InputLabel id="demo-simple-select-error-label">Service Type</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
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
              defaultValue={20}
              valueLabelDisplay="auto"
              step={5}
              getAriaValueText={(val) => setSliderValue(val)}
              marks={true}
              min={0}
              max={100}
            /> Km
          </AccordionDetails>
        </Accordion>
        <FormControl className="field-selector submit">
        <Button variant="outlined" onClick={() => checkoutSubmit()}>Submit</Button></FormControl>
      </FormControl>
    </div>
  );
};

export default Filters;
