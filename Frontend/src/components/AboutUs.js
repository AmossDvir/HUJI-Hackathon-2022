import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
import { Stack } from "@mui/material";
import "./AboutUs.css"
const AboutUs = () => {
  return (
    <div className="main-div">
      <div class="about-section">
        <h1>EasyMed, Who are we?</h1>
        <p>A young innovative startup, trying to improve the PRODACTIVITY of Health systmes.</p>
      </div>
      <div className="secondery-div">


        <h2 className="header-team">Our Team</h2>
        <div class="row">
          <div class="column">
            <div class="card">
              {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"></img> */}
              <div class="container">
                <h2>Amoss Dvir</h2>
                <p class="title">CEO & Master</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>amoss.dvir@mail.huji.ac.il</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%" /> */}
              <div class="container">
                <h2>Ore Snir</h2>
                <p class="title">CTO</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>ore.snir@mail.huji.ac.il</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"> </img> */}
              <div class="container">
                <h2>Omer Beeri-Shani</h2>
                <p class="title">Software Manager</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>omer.beerishani@mail.huji.ac.il</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"> </img> */}
              <div class="container">
                <h2>Amir Kelman</h2>
                <p class="title">Prodact Manager</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>amir.kelman@mail.huji.ac.il</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"> </img> */}
              <div class="container">
                <h2>Yonatan Sugarmen</h2>
                <p class="title">Chairman & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>yonatan.sugarmen@mail.huji.ac.il</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default AboutUs