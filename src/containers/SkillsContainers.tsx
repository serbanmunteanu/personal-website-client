import { faLinux, faNode, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Skill from '../components/Skill';

interface SkillsContainerProps {
    isVisible: boolean
}

const SkillsContainers: React.FC<SkillsContainerProps> = ({isVisible}) => {
    const [skills,] = React.useState([
        {
            icon: faPhp,
            percentage: 85
        },
        {
            icon: faNode,
            percentage:80
        },
        {
            icon: faDatabase,
            percentage:80
        },
        {
            icon: faLinux,
            percentage:60
        }
    ]);
    return (
        <div className="container flex flex-wrap md:flex-nowrap md:flex-row justify-evenly items-center">
            {
                skills.map(skill => <Skill icon={skill.icon} percentage={isVisible ? skill.percentage : 0}/>)
            }
        </div>
    )
}

export default SkillsContainers
