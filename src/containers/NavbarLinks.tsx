import React, { useState } from 'react';
import NavbarLink from '../components/NavbarLink';
import { faHome, faBriefcase, faAddressCard, faChalkboardTeacher, faUser, faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

function NavbarLinks() {
    const { i18n, t } = useTranslation();
    const [languages,] = React.useState([
        { 
          code:'en',
          display: 'en-GB',
        },
        { 
            code:'ro',
            display: 'ro-RO',
        },
          { 
            code:'fr',
            display: 'fr-FR',
          },
          { 
            code:'de',
            display: 'de-DE',
          },
    ]);
    const [mobile,] = React.useState(window.innerWidth < 450)

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    const [links, ] = useState([
        {
            path: '/',
            image: faHome,
            name: 'navbar.home'
        },
        {
            path: '/about-me',
            image: faAddressCard,
            name: 'navbar.about-me'
        },
        {
            path: '/services',
            image: faBriefcase,
            name: 'navbar.services'
        },
        {
            path: '/learning',
            image: faChalkboardTeacher,
            name: 'navbar.learn'
        },
        {
            path: '/my-account',
            image: faUser,
            name: 'navbar.account'
        }
    ]);

    return (
        <div className="flex flex-row glass">
            {
                links.map(link => <NavbarLink path={link.path} image={link.image} name={link.name} key={link.path}/>)
            } 
                <div className="dropdown inline-block relative mx-2 md:mx-5 my-2">
                <div className="container my-2 flex items-center">
                    <FontAwesomeIcon icon={faFlag} size="2x"/>
                    { !mobile && <div className="ml-2">{t('navbar.language')}</div> }
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </div>
                <ul className="dropdown-menu absolute hidden text-center w-full pt-4">
                    {
                        languages.map((language, i) => <li className="rounded-t glass hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap mb-2" onClick={() => changeLanguage(language.code)}>{mobile ? language.code.toUpperCase() : language.display}</li>                        )
                    }
                </ul>
                </div>
        </div>
    
    )
}

export default NavbarLinks;