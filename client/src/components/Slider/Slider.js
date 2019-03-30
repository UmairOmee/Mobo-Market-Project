import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../../images/v151.jpg'
import Img2 from '../../images/v152.jpg'
import Img3 from '../../images/v153.jpg'


class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img1}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
      </div>
    )
  }
}

export default Slider;
