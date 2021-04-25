import React from 'react'
import NavbarLinks from '../containers/NavbarLinks'
import gsap from 'gsap';

function Navbar() {

    React.useEffect(() => {
        gsap.from('.navbar', {
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            y: -100
        })
    },[])

    return (
        <div className="navbar font-serif"> 
            <NavbarLinks />
        </div>
    )
}

export default Navbar
