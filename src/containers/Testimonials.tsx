import React from 'react'
import Testimonial from '../components/Testimonial'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Testimonials() {
    const [testimonials, ] = React.useState([
        {
            name: 'bla-bla',
            text: 'testimonials.first',
            star: 5
        },
        {
            name: 'bla-bla1',
            text: 'testimonials.second',
            star: 5
        },
        {
            name: 'bla-bla2',
            text: 'testimonials.third',
            star: 5
        },
        {
            name: 'bla-bla3',
            text: 'testimonials.four',
            star: 5
        },
        {
            name: 'bla-bla4',
            text: 'testimonials.five',
            star: 5
        }
    ])
    return (
        <div className="testimonials">
            <Carousel autoPlay showStatus={false} infiniteLoop={true}>
                {
                        testimonials.map((test,index) => {return (<Testimonial key={index} name={test.name} text={test.text} star={test.star} />)})
                }
            </Carousel>
        </div>
    )
}

export default Testimonials
