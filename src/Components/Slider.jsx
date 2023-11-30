import React from "react";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Carousel from 'react-bootstrap/Carousel';

function Slider(props) {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        {props.loading ? (
            <Skeleton className="d-block w-100" height="60vh" />
        ): (
            <img
          className="d-block w-100 "
          src="https://source.unsplash.com/1600x900/?coding"
          alt="First slide"
        />
        )
        }
        
      </Carousel.Item>
      <Carousel.Item>
        {props.loading ? (
            <Skeleton className="d-block w-100" height="60vh" />
        ): (
            <img
          className="d-block w-100 "
          src="https://source.unsplash.com/1600x900/?coding"
          alt="First slide"
        />
        )
        }
        
      </Carousel.Item>
      
      
    </Carousel>
    </>
  );
}


export default Slider;
