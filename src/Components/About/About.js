import React, { Component } from 'react';
import './About.css'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,

    }
  }

  componentDidMount() {
  }

  render() {
    if (this.state.isLoading) return null
    console.log("hello about")
    return (
      <div className="About">
          <div id= "about-wrapper">
          <h1>About</h1>
          <div className="dropdown-divider"></div>
          <br/>
            <div id="about-text">
            <p id="left">
              Hello everyone who really care to press "About" button.<br/>
              This is a project of Software engineering class on 2019/2  prof.Taratip<br/>
              The project is to build a matching system and our work is about workshop in university<br/>
            </p>
            <p id="right">
              Why workshop?<br/>
              For god sake I don't know prof just hit this project to our face<br/>
            </p>
            <p id="right">
              Our team contribution and power is insane.<br/>
              Every of us finish our works in just 1 hour (before deadline).<br/>
              This project is made by 8 MEN<br/>
            </p>
            <p id="left">
              Our team is 8 MAN walking like the beetles but twice!<br/>
              The team divided into 3 subteam<br/>
              <ol type="1">
                <li>Frontend the makeup artist (A bunch of know nothing guys without designer)</li>
                <li>Backend the penetrator (Who penetrate front)</li>
                <li>Special force the carry of the game (If they die we all die)</li>
              </ol>
            </p>
            </div>
            <img src="/Matcher_logo.png" id="center"/>
            <h2>Below are our name and position</h2>
            <br/>
            <div id="member-wrapper">
              <div>
                <h2>Frontend guys</h2>
                <ol type="1">
                  <li>Charn ctkgit</li>
                  <li>Terk tanac</li>
                  <li>Win winpasit</li>
                </ol>
              </div>
              <div>
                <h2>Backend guys</h2>
                <ol type="1">
                  <li>Too thanit456</li>
                  <li>Owen owenten</li>
                  <li>Miw Endifly</li>
                </ol>
              </div>
              <div>
                <h2>Special-force</h2>
                <ol type="1">
                  <li>Park sprkzoff</li>
                  <li>Pon pjumruspun</li>
                </ol>
              </div>
            </div>
            <div>
              <br/>
              <h2>Special thanks</h2>
              <br/>
              <img id="center" alt='' src="https://media1.tenor.com/images/2060b012ce3ca527618ce1f100109109/tenor.gif?itemid=16728482" />
              <br/>
              <br/>
              <h4 id="center">RESPECT THE MATCHER TEAM</h4>
              <br/>
            </div>
            <p>
              
            </p>
          </div>
      </div>
    )
  }
}

export default About;