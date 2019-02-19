import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class MixesComponent extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url="https://www.mixcloud.com/sebastian-mattsson/new-years-mix-2018-by-saint/"
          playing
          width="25%"
          height="50%"
        />
        <ReactPlayer
          url="https://www.mixcloud.com/sebastian-mattsson/april-fools-mix/"
          playing
          width="25%"
          height="50%"
        />
        <ReactPlayer
          url="https://www.mixcloud.com/sebastian-mattsson/new-years-mix-by-sebastian-saint/"
          playing
          width="25%"
          height="50%"
        />
        <ReactPlayer
          url="https://www.mixcloud.com/sebastian-mattsson/saturday-one-take/"
          playing
          width="25%"
          height="50%"
        />
      </div>
    );
  }
}
