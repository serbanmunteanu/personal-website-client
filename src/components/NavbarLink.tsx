import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface NavbarLinkProps {
    path: string;
    name: string;
    image: IconProp;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({path, name, image}) => {
    const history = useHistory();
    const location = useLocation();
    const [mobile,] = React.useState(window.innerWidth < 450)
    const {t} = useTranslation();
    
    return (
        <div className="mx-2 md:mx-5 my-2 pointer" onClick={() => history.push(path)}>
            <motion.div whileHover={{scale: 1.2}} className={`container my-auto flex items-center ${location.pathname === path ? 'navbarLink__active' : ''}`}>
                <FontAwesomeIcon icon={image} className={`svg-color ${location.pathname === path ? 'svg-active' : ''}`} size="2x"/>
                {
                    !mobile && <p className="ml-2">{t(name)}</p>
                }
            </motion.div>
        </div>
    )
}

export default NavbarLink
