import React from "react";
import Map from "./Map";
import Filters from "./Filters";
import Suggestions from "./Suggestions";
import NestedList from "./NestedList";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import { convertLength } from "@mui/material/styles/cssUtils";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HomePage = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item width={800} height={300}>
                    <Item className="filters">
                        <Filters></Filters>
                    </Item>
                </Grid>
                <Grid item xs={5} md={4}>
                    <Item><Map></Map></Item>
                </Grid>
                <Grid item xs={12}>
                    <Item><Suggestions></Suggestions></Item>
                </Grid>
            </Grid>



        </div>
    )
};

export default HomePage;