import PropTypes from "prop-types";
import React, { Component } from "react";
import Gallery from "react-grid-gallery";

export default class PictureLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images
    };
  }

  setCustomTags(i) {
    return i.tags.map(t => {
      return (
        <div key={t.value}>{t.title}</div>
      );
    });
  }

  render() {
    var images = this.state.images.map(i => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
          {i.hasOwnProperty("tags") && this.setCustomTags(i)}
        </div>
      );
      return i;
    });

    return (
        <div style={{width: "75%", flexDirection: "row"}}>
        <Gallery images={images} enableImageSelection={false} max />
        </div>)
        ;
  }
}

PictureLibrary.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired
    })
  ).isRequired
};

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "95%",
  color: "white",
  padding: "0px",
  fontSize: "90%"
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "lightblue",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "1px"
};

PictureLibrary.defaultProps = {
  images: [
    {
      src: "../assets/saint1.jpg",
      thumbnail: "../assets/saint1.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "X-Cruise", title: "" }],
      caption: "Bild under en spelning på X-Cruise"
    },
    {
      src: "../assets/saint2.jpg",
      thumbnail: "../assets/saint2.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Ritz", title: "" }],
      caption: "Bild från Klubben Ritz"
    },
    {
      src: "../assets/saint4.jpg",
      thumbnail: "../assets/saint4.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "X-Cruise", title: "" }],
      caption: "Bild under en spelning på X-Cruise"
    },
    {
      src: "../assets/saint5.jpg",
      thumbnail: "../assets/saint5.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "X-Cruise", title: "" }],
      caption: "Bild under en spelning på X-Cruise"
    },
    {
      src: "../assets/saint6.jpg",
      thumbnail: "../assets/saint6.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd", title: "" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint7.jpg",
      thumbnail: "../assets/saint7.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd", title: "" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint8.jpg",
      thumbnail: "../assets/saint8.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint9.jpg",
      thumbnail: "../assets/saint9.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint10.jpg",
      thumbnail: "../assets/saint10.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint11.jpg",
      thumbnail: "../assets/saint11.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "X-Cruise" }],
      caption: "Bild under en spelning på X-Cruise"
    },
    {
      src: "../assets/saint12.jpg",
      thumbnail: "../assets/saint12.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint13.jpg",
      thumbnail: "../assets/saint13.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint14.jpg",
      thumbnail: "../assets/saint14.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint15.jpg",
      thumbnail: "../assets/saint15.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint16.jpg",
      thumbnail: "../assets/saint16.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "X-Cruise" }],
      caption: "Bild under en spelning på X-Cruise"
    },
    {
      src: "../assets/saint17.jpg",
      thumbnail: "../assets/saint17.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint18.jpg",
      thumbnail: "../assets/saint18.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    },
    {
      src: "../assets/saint19.jpg",
      thumbnail: "../assets/saint19.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      tags: [{ value: "Okänd" }],
      caption: "Bild under en spelning"
    }
  ]
};
