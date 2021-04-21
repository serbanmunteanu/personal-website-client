import { faAws, faDocker, faMagento, faShopify, faWordpress } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import Skill from '../components/Skill';

interface SkillsContainerProps {
    isVisible: boolean
}

const CloudContainers: React.FC<SkillsContainerProps> = ({isVisible}) => {
    const [skills,] = React.useState([
        {
            icon: faAws,
            percentage: 65
        },
        {
            icon: faDocker,
            percentage:50
        },
        {
            icon: faMagento,
            percentage:80
        },
        {
            icon: faWordpress,
            percentage:70
        },
        {
            icon: faShopify,
            percentage:70
        }
    ]);
    return (
        <div className="container flex flex-wrap md:flex-row justify-evenly items-center">
            {
                skills.map(skill => <Skill icon={skill.icon} percentage={isVisible ? skill.percentage : 0}/>)
            }
        </div>
    )
}

export default CloudContainers
