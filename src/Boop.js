import React, {Component} from "react";

class Boop extends Component {

  componentDidMount() {
    this.setState({scale: 1});
  }

  render() {
    return  (
      <div>
        <marquee behavior="scroll" direction="left">Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop Boop </marquee>
      </div>
    )
  }


}

export default Boop;