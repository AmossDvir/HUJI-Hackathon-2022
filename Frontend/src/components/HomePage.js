import React, { useEffect, useState } from "react";
import Map from "./Map";
import Filters from "./Filters";
import Suggestions from "./Suggestions";
import NestedList from "./NestedList";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import { convertLength } from "@mui/material/styles/cssUtils";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const [careChoice, setCareChoice] = useState([]);
  const [careChoiceList, setCareChoiceList] = useState();
  const makeCareChoiceReq = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/care_choice/");
    setCareChoice(data);
  };

  const makeOnSubmitReq = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/by_params/",{params:{filter:{radius:5}}});
    console.log(data)
  };

  const onSubmitClick = () => {
    makeOnSubmitReq()
  }
  useEffect(() => {
    makeCareChoiceReq();
  }, []);

  useEffect(() => {
    setCareChoiceList(Object.entries(careChoice));
  }, [careChoice]);

  return (
    <div className="main-grid">
      <Grid className="hp-grid" container spacing={2}>
        <Grid item xs={4}>
          <Item className="single-item">
            <Filters careChoiceList={careChoiceList}></Filters>
            <Button onClick={onSubmitClick}>Submit</Button>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item className="single-item">
            <Map></Map>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item className="single-item">
            <Suggestions></Suggestions>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
