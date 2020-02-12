import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,

    }
  }

  componentDidMount() {
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 1500,
    }
    if (this.state.isLoading) return null
    console.log("hello Homepage")
    return (
      <div className="App">

        <div className="flex-container" id="intro">
          <div className="left-intro">
            <div id="text"><b>Matcher</b> is a workshop matching platform Free for visiting and ease of use for new comers</div>
          </div>
          <div className="right-intro">
          </div>
        </div>
        <div id="hot-content">
          <div>
            <h2 id="in-trend-head">In trend workshop</h2>
            <Slider {...settings}>
              <div>
                <img id="slick-item" src="test.jpg" />
              </div>
              <div>
                <img id="slick-item" src="test.jpg" />
              </div>
              <div>
                <img id="slick-item" src="test.jpg" />
              </div>
              <div>
                <img id="slick-item" src="test.jpg" />
              </div>
              <div>
                <img id="slick-item" src="test.jpg" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    )
  }
}

export default App;