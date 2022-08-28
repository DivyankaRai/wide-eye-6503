import React from 'react'
import un1 from "../Image/un1.png"
import un2 from "../Image/un2.png"
import un3 from "../Image/un3.png"
import Carousel from 'react-bootstrap/Carousel';
const Car = () => {
  return (
    <div>
            <Carousel style={{height:"400px",width:"600px",margin:"auto",border:"1px solid black"}}>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={un1}
                alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={un2}
                alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                   src={un3}
                alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </div>
  )
}

export default Car
