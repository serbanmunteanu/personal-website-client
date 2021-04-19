import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { motion } from 'framer-motion';

interface MediaProps {
    icon: IconProp,
    link: string
}

const Media: React.FC<MediaProps> = ({icon, link}) => {
    return (
        <motion.div whileHover={{scale:1.2}} className="media" onClick={() => window.open(link,"_blank")}>
            <FontAwesomeIcon icon={icon} size="2x"/>
        </motion.div>
    )
}

export default Media
