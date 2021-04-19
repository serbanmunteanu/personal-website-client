import React from 'react'

interface TestimonialProps {
    name: string,
    text: string,
    star: number
}

const Testimonial: React.FC<TestimonialProps> = ({name, text, star}) => {
    return (
        <div className="testimonial">
            {name}
        </div>
    )
}

export default Testimonial
