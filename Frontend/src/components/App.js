import React, { useEffect, useState, useRef } from "react";
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";
import Route from "./routing/Route";
import "./styling.css";
import axios from "axios";
import AboutUs from "./AboutUs";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const App = () => {
  const [locationName, setLocationName] = useState("");
  const [emergencyLoc, setEmergencyLoc] = useState("");
  const [emergencyClicked, setEmergencyClicked] = useState(false);
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(true);
  const topElementRef = useRef();

  const makeEmerReq = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/emergency/");
    setEmergencyLoc(data.name);
  };

  useEffect(
    () => window.addEventListener("scroll", onToggleScrollButtonVisible),
    []
  );

  const onToggleScrollButtonVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 200 ? setIsTopButtonVisible(true) : setIsTopButtonVisible(false);
  };

  useEffect(() => {
    emergencyClicked
      ? setLocationName(emergencyLoc)
      : setLocationName("Givat Ram");
  }, [emergencyClicked]);

  const onEmergencyClick = () => {
    setEmergencyClicked(!emergencyClicked);
  };

  useEffect(() => makeEmerReq(), []);
  return (
    <div ref={topElementRef}>
      <NavigationBar
        emergencyClicked={emergencyClicked}
        onEmergencyClick={onEmergencyClick}
        onAboutUsClicked={() => setEmergencyClicked(false)}
      ></NavigationBar>
      <Route path="/">
        <HomePage locationName={locationName}></HomePage>
      </Route>
      <Route path="/aboutus">
        <AboutUs></AboutUs>
      </Route>
      {isTopButtonVisible && (
        <div className="scroll-top">
          <ArrowCircleUpIcon
            className="arrow circle up icon"
            onClick={() => topElementRef.current.scrollIntoView()}
          />
        </div>
      )}
    </div>
  );
};

export default App;
