import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      workshops: []
    }
    this.goto = this.goto.bind(this)
  }

  componentDidMount() {
    // console.log(process.env.REACT_APP_URL);
    // console.log(process.env.REACT_APP_OMMISE_KEY);
    // console.log('cookie now : ',document.cookie)
    axios.get(`${process.env.REACT_APP_URL}/workshops`)
      .then(res => {
        // console.log(res)
        this.setState({
          workshops: res.data.slice(0, 5)
        })
      })
  }

  goto(id) {
    // let check = this.props.item.id
    // // console.log(this.state.workshop_id)
    window.location.assign('/workshop-detail/' + id)
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 1000,
    }
    if (this.state.isLoading) return null
    // console.log("hello Homepage")
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
              {
                this.state.workshops.map(workshop =>
                  <div id="wrap-item" onClick={() => this.goto(workshop.id)} >
                    <img id="slick-item" alt="" src={workshop.pictureURL} />
                    <div id="slick-item-name" >{workshop.name}</div>
                  </div>
                )
              }
            </Slider>
          </div>
        </div>
        <svg viewBox="0 110 1440 320"><path fill="#F5F5F5" fill-opacity="1" d="M0,192L80,197.3C160,203,320,213,480,192C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <div>
        </div>
      </div>
    )
  }
}

export default App;