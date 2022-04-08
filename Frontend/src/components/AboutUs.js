import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
import { Stack } from "@mui/material";
import "./AboutUs.css"
import amosspic from "../images/Amoss.png";
import omerpic from "../images/Hamotz.png";
import orpic from "../images/Or.png"
import amirpic from "../images/Amir.png"
import yonatanpic from "../images/Yonatan.png"
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
              <div class="container">
                <img className="amosspic" src={amosspic} />
                <h2>Amoss Dvir</h2>
                <p class="title">CEO & Master</p>
                <p>3rd year Computer Science studant at the Hebrew University</p>
                <p>amoss.dvir@mail.huji.ac.il</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img className="orpic" src={orpic}/>
              <div class="container">
                <h2>Ore Snir</h2>
                <p class="title">CTO</p>
                <p>3rd year Computer Science studant at the Hebrew University</p>
                <p>ore.snir@mail.huji.ac.il</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img className="omerpic" src={omerpic}/>
              <div class="container">
                <h2>Omer Beeri-Shani</h2>
                <p class="title">Software Manager</p>
                <p>2nd year Electrical Engeneer studant at the Hebrew University</p>
                <p>omer.beerishani@mail.huji.ac.il</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img className="amirpic" src={amirpic}/>
              <div class="container">
                <h2>Amir Kelman</h2>
                <p class="title">Prodact Manager</p>
                <p>2nd year Computer Science studant at the Hebrew University</p>
                <p>amir.kelman@mail.huji.ac.il</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img className="yonatanpic" src={yonatanpic}/>
              <div class="container">
                <h2>Yonatan Sugarmen</h2>
                <p class="title">Chairman & Founder</p>
                <p>2nd year Electrical Engeneer studant at the Hebrew University</p>
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