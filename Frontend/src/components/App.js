import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";
import Route from "./routing/Route";
import "./styling.css";
import axios from "axios";
import AboutUs from "./AboutUs";
const App = () => {
  const [locationName, setLocationName] = useState("");
  const [emergencyLoc, setEmergencyLoc] = useState("");
  const [emergencyClicked, setEmergencyClicked] = useState(false);
  const [onAboutUs, setOnAboutUs] = useState(false);
  const [rendComp, setRendComp] = useState(
    <HomePage locationName={locationName}></HomePage>
  );

  const makeEmerReq = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/emergency/");
    setEmergencyLoc(data.name);
  };

  useEffect(() => {
    onAboutUs ? setRendComp(<AboutUs></AboutUs>) : setRendComp();
    console.log(onAboutUs);
  }, [onAboutUs]);

  useEffect(() => {
    emergencyClicked
      ? setLocationName(emergencyLoc)
      : setLocationName("Jerusalem");
  }, [emergencyClicked]);

  const onEmergencyClick = () => {
    setEmergencyClicked(!emergencyClicked);
  };

  useEffect(() => makeEmerReq(), []);
  return (
    <div>
      <NavigationBar
        setOnAboutUs={setOnAboutUs}
        emergencyClicked={emergencyClicked}
        onEmergencyClick={onEmergencyClick}
      ></NavigationBar>
      <Route path="/">
        <HomePage locationName={locationName}></HomePage>
      </Route>
      <Route path="/aboutus">
        <AboutUs></AboutUs>
      </Route>
      {rendComp}
    </div>
  );
};

export default App;
