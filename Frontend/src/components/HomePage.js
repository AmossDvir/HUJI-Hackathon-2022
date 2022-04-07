import React from "react";
import Map from "./Map";
import Filters from "./Filters";
import Suggestions from "./Suggestions";
import NestedList from "./NestedList";
const HomePage = () => {
    return (
        <div>
            <Filters></Filters>
            <Suggestions></Suggestions>

        </div>
    )
};

export default HomePage;