import React from 'react'
import {Carousel} from 'react-bootstrap'
import FirstImage from '../img/01.jpg'
export default function CarouselSide() {
    return (
        <div>
           <Carousel>
  <Carousel.Item interval={900} >
    <img
      className="d-block w-100 "
      src={FirstImage}
      alt="First slide"
      height={350}
    />
    <Carousel.Caption>
      <h3>Website under construction</h3>
      <p>a platform that teaches your child abacus anytime, anywhere! This platform enables them to learn abacus at the comfort of their own home</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={FirstImage}
      alt="Second slide"
      height={350}
    />
    <Carousel.Caption>
      <h3>Website under construction</h3>
      <p>you can follow course in Bruxelles</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 fix"
      src={FirstImage}
      alt="Third slide"
      height={350}
    />
    <Carousel.Caption >
      <h3>Website under construction</h3>
      <p>the course for dutch speakers</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </div>
    )
}
