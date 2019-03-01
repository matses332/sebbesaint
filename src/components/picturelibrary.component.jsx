import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    { src: '../assets/saint1.jpg', width: 6, height: 3 },
    { src: '../assets/saint2.jpg', width: 6, height: 3 },
    { src: '../assets/saint3.jpg', width: 6, height: 3 },
    { src: '../assets/saint4.jpg', width: 6, height: 3 },
    { src: '../assets/saint5.jpg', width: 6, height: 3 },
    { src: '../assets/saint6.jpg', width: 6, height: 3 },
    { src: '../assets/saint7.jpg', width: 6, height: 3 },
    { src: '../assets/saint8.jpg', width: 6, height: 3 },
    { src: '../assets/saint9.jpg', width: 6, height: 3 },
    { src: '../assets/saint10.jpg', width: 6, height: 3 },
    { src: '../assets/saint11.jpg', width: 6, height: 3 },
    { src: '../assets/saint12.jpg', width: 6, height: 3 },
    { src: '../assets/saint13.jpg', width: 6, height: 3 },
    { src: '../assets/saint14.jpg', width: 6, height: 3 },
    { src: '../assets/saint15.jpg', width: 6, height: 3 },
    { src: '../assets/saint16.jpg', width: 6, height: 3 },
    { src: '../assets/saint17.jpg', width: 6, height: 3 },
    { src: '../assets/saint18.jpg', width: 6, height: 3 },
    { src: '../assets/saint19.jpg', width: 6, height: 3 }
  ];


export default class pictureLibrary extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }
      render() {
        return (
          <div className="gallery">
            <Gallery photos={photos} onClick={this.openLightbox} />
            <Lightbox images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
        )
      }
    }
    

    