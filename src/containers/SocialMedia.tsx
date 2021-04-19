import React from 'react'
import Media from '../components/Media'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { TimelineMax } from 'gsap';

function SocialMedia() {

    // React.useEffect(() => {
    //     const tl = new TimelineMax({delay:1});
    //     tl.staggerFrom(".media", 0.3, {
    //         opacity: 0,
    //         ease: "power2.in",
    //         stagger: {
    //             amount: 1
    //         }
    //     })
    // });
    const [media,] = React.useState([
        {
            icon: faLinkedin,
            link: 'https://www.linkedin.com/in/serban-munteanu-10912a143/'
        },
        {
            icon: faInstagram,
            link: 'https://www.instagram.com/munteanu.serban/'
        },
        {
            icon: faGithub,
            link: 'https://github.com/serbanmunteanu'
        }
    ])
    return (
        <div className="mt-8 flex">
            {
                media.map(item => <Media icon={item.icon} link={item.link}/>)
            }
        </div>
    )
}

export default SocialMedia
