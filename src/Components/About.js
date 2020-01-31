import React, { Component } from 'react';


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
          <h1>About</h1>
      </div>
    )
  }
}

export default About;