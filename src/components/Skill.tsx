import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

interface SkillProps {
    icon: IconProp,
    percentage: number
}

const Skill: React.FC<SkillProps> = ({icon, percentage}) => {
    return (
        <div className="w-2/5 md:w-40 pb-5">
            <CircularProgressbarWithChildren
                value={percentage}
                styles={{
                    path: {
                        stroke: '#F53689',
                        transition: 'stroke-dashoffset 1s ease 0s',
                    },
                    trail: {
                        stroke: 'rgba(255,255,255,.6)'
                    }
            }}> 
                <FontAwesomeIcon icon={icon} size="4x" />
            </CircularProgressbarWithChildren>
        </div>
    )
}

export default Skill
