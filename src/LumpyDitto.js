import React, { Component } from "react";
import lumpyDitto from './resources/ditto.jpg'

class LumpyDitto extends Component {
  render() {
    return (
      <div class="content-container">
        <h2>Ditto</h2>
        <h3>I have written a short haiku for the love of my life, Ditto.</h3>
        <br/>
        <p>I love my ditto</p>
        <p>I love it too much - oh no</p>
        <p>Lumpy it became...</p>
        <img src={lumpyDitto} alt="Delicious beverage (maybe also food)"/>
      </div>
    );
  }
}

export default LumpyDitto;