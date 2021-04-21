import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import animoji from './animoji2.png';
import Notification from '../components/Notification';
import { faGraduationCap, faUserTie, faCalendarAlt, faPhoneAlt, faEnvelope, faHome  } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../state.provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VisibilitySensor from "react-visibility-sensor";
import SkillsContainers from '../containers/SkillsContainers';
import CloudContainers from '../containers/CloudContainers';

function AboutMeScreen() {
    const { t } = useTranslation();
    const {user} = useContext(UserContext);

    console.log(user);
    return (
        <div className="m-5">
            <div className="container md:mx-auto">
                <h3 className="color-red text-center uppercase tracking-wider text-xl font-serif md:mb-5">
                        {t('aboutMePage.section1.pretitle')}
                        </h3>
                <div className="container flex flex-col md:flex-row md:justify-evenly">
                    <div className="container mb-10 font-serif md:w-2/4 md:mr-20">
                    <h1 className="text-center uppercase text-2xl">
                        About
                    </h1>
                    <div className="aboutMe__about__text">
                    &nbsp;&nbsp;&nbsp;&nbsp;I am results-oriented, constantly checking in with the goal to determine how close or how far away we are and what it will take to make it happen. I find this pressure inspiring and a great motivator for the rest of the team.<br></br> <br></br>&nbsp;&nbsp;&nbsp;&nbsp;I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I’m not comfortable with settling, and I’m always looking for an opportunity to do better and achieve greatness.
                    </div>
                    <div className="aboutMe__signature py-3">
                        Mr.S.Munteanu
                    </div>
                    </div>
                    <div className="aboutMe__textContainer__information">
                    <h1 className="text-center uppercase text-2xl mb-5">
                        Information
                    </h1>
                    <div className="flex flex-col justify-between text-gray-300 mb-5 font-serif">
                        <div className="flex items-center px-5 py-2">
                            <FontAwesomeIcon className="color-red" icon={faCalendarAlt} size="2x" /><span className="ml-6">12th November, 1997</span> 
                        </div>
                        <div className="flex items-center px-5 py-2">
                            <FontAwesomeIcon className="color-red" icon={faPhoneAlt} size="2x" /><span className="ml-5"> 0743577326</span> 
                        </div>
                        <div className="flex items-center px-5 py-2">
                            <FontAwesomeIcon className="color-red" icon={faEnvelope} size="2x" /><span className="ml-5"> serban.munteanu1211@gmail.com</span> 
                        </div>
                        <div className="flex items-center px-5 py-2">
                            <FontAwesomeIcon className="color-red" icon={faHome} size="2x" /><span className="ml-4">Orhideelor Street, Bucharest</span> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container mb-5 md:mx-auto">
                    <h1 className="text-center uppercase text-2xl mb-5">
                        Skills
                    </h1>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                        return (
                            <SkillsContainers isVisible={isVisible}/>
                        );
                        }}
                    </VisibilitySensor>
            </div>
            <div className="container md:mx-auto">
                    <h1 className="text-center uppercase text-2xl mb-5 md:mb-10">
                    {`${t('aboutMePage.section1.title')}`}
                    </h1>
                <div className="container flex flex-col md:flex-row">
                <div className="container md:w-1/3 md:my-auto">
                    <Notification 
                        logo={faGraduationCap}
                        fontAwesomeIcon={true}
                        title='aboutMePage.section1.education.acs.name'
                        subtitle='aboutMePage.section1.education.acs.profile'
                        flexDirectionType='row'
                    />
                    <Notification 
                        logo={faGraduationCap}
                        fontAwesomeIcon={true}
                        subtitle='aboutMePage.section1.education.design.profile'
                        title='aboutMePage.section1.education.design.name'
                        flexDirectionType='row'
                    />
                    <Notification 
                        logo={faGraduationCap}
                        fontAwesomeIcon={true}
                        subtitle='aboutMePage.section1.education.refactoring.profile'
                        title='aboutMePage.section1.education.refactoring.name'
                        flexDirectionType='row'
                    />
                </div>
                <div className="-mt-5 md:w-1/3 flex align-center">
                    <img src={animoji} alt="" className="mx-auto my-auto"/>
                </div>
                <div className="container md:w-1/3 md:my-auto">
                    <Notification 
                        logo={faUserTie}
                        fontAwesomeIcon={true}
                        title='Retargeting BIZ'
                        subtitle='aboutMePage.section1.work.retargeting.profile'
                        flexDirectionType='row-reverse'
                    />
                    <Notification 
                        logo={faUserTie}
                        fontAwesomeIcon={true}
                        title='Molson Coors International'
                        subtitle='aboutMePage.section1.work.molson.profile'
                        flexDirectionType='row-reverse'
                    />
                    <Notification 
                        logo={faUserTie}
                        fontAwesomeIcon={true}
                        title='Ubisoft Entertainment SA'
                        subtitle='aboutMePage.section1.work.ubisoft.profile'
                        flexDirectionType='row-reverse'
                    />
                </div>
                </div>
            </div>
            <div className="container my-5 md:mx-auto">
                    <h1 className="text-center uppercase text-2xl mb-5 md:mb-10">
                        Cloud &amp; E-commerce
                    </h1>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                        return (
                            <CloudContainers isVisible={isVisible}/>
                        );
                        }}
                    </VisibilitySensor>
            </div>
        </div>
    )
}

export default AboutMeScreen
