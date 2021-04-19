import React from 'react'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import FooterExternalLink from './FooterExternalLink';
import FooterInternalLink from './FooterInternalLink';

function Footer() {
    const {t} = useTranslation();
    const history = useHistory();
    const [services,] = React.useState([
        {
            link: '/services',
            name: 'footer.services'
        },
        {
            link: '/about-me',
            name: 'footer.about-me'
        },
        {
            link: '/learning',
            name: 'footer.learning'
        }
    ]);
    const [stuff,] = React.useState([
        {
            link: '/terms-of-use',
            name: 'footer.terms-of-use'
        }, 
        {
            link: '/contact-me',
            name: 'footer.contact-me'
        },
        {
            link: '/faq',
            name: 'footer.faq'
        }
    ]);
    const [follow,] = React.useState([
        {
            link: 'https://www.linkedin.com/in/serban-munteanu-10912a143/',
            name: 'Linkedin'
        },
        {
            link: 'https://www.instagram.com/munteanu.serban/',
            name: 'Instagram'
        },
        {
            link: 'https://github.com/serbanmunteanu',
            name: 'Github'
        }
    ])

    return (
        <div className="mt-10 bottom-0">
            <div className="mx-5 md:container glass flex flex-col-reverse md:flex-row md:mx-auto justify-evenly">
                <div className="p-5 font-serif text-center">
                    <p className="container mx-auto text-xl border-bottom-colored">{t('footer.titles.services')}</p>
                    <div className="text-m">
                    {
                        services.map(service => <FooterInternalLink link={service.link} name={service.name}/>)
                    }
                    </div>
                </div>
                <div className="p-5 font-serif text-center">
                    <p className="container mx-auto text-xl border-bottom-colored">{t('footer.titles.important-stuff')}</p>
                    <div className="text-m">
                    {
                        stuff.map(stuf => <FooterInternalLink link={stuf.link} name={stuf.name}/>)
                    }
                    </div>
                </div>
                <div className="p-5 font-serif text-center">
                    <p className="container mx-auto text-xl border-bottom-colored">{t('footer.titles.follow-me')}</p>
                    <div className="text-m">
                    {
                        follow.map(fol => <FooterExternalLink link={fol.link} name={fol.name} />)
                    }
                    </div>
                </div>
                <div className="text-center font-serif my-5 md:my-auto">
                    <h2 className="text-2xl mb-4">{t('footer.request.title')}</h2>
                    <div className="footer_requestButton__text colored my-5 mx-auto" onClick={() => history.push('/request-project')}>{t('footer.request.button')}</div>
                </div>
            </div>
            <div className="footer__copywrite">
                {`${t('footer.copyrights.title')} © ${new Date().getFullYear()} ${t('footer.copyrights.location')}`}
            </div>
        </div>
    )
}

export default Footer
