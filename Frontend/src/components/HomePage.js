import React from "react";
import Map from "./Map";
import Filters from "./Filters";
import Suggestions from "./Suggestions";
import NestedList from "./NestedList";
const HomePage = () => {
    return (
        <div>
            <Map></Map>
            <Filters></Filters>
            <Suggestions></Suggestions>
            <Map></Map>
        </div>
    )
};

export default HomePage;