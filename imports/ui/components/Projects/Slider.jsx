import React, { Component } from 'react';

class Slider extends Component {

  componentWillReceiveProps(nextProps) {
    var swiper = new Swiper('.swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      mousewheelControl: false,
    });
    swiper.destroy(false, true);
    setTimeout(function(){
      var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        mousewheelControl: false,
      });
    }, 300);
  }

  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      mousewheelControl: false,
    });
  }

  slides() {
    return this.props.slides;
  }

  renderSlides() {
    return this.slides().map(slide => {
      return (
        <div className="swiper-slide" key={slide._id}>
          <img className="swiper-slide-image" src={slide.src} />
        </div>
      );
    });
  }


  render() {
    return (
      <div className="swiper-container">

        <div className="swiper-wrapper">
          {this.renderSlides()}
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
}


export default Slider;
