import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import animoji from './animoji2.png';
import Notification from '../components/Notification';
import { faGraduationCap, faUserTie, faCalendarAlt, faPhoneAlt, faEnvelope, faHome  } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../state.provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import SkillsContainers from '../containers/SkillsContainers';
import CloudContainers from '../containers/CloudContainers';

function AboutMeScreen() {
    const { t } = useTranslation();
    const {user} = useContext(UserContext);

    console.log(user);
    return (
        <div className="Screen">
            <div className="aboutMe__initial">
                <h3 className="homeScreen__hello__red ta-center mb0 title-red">
                        {t('aboutMePage.section1.pretitle')}
                        </h3>
                <div className="aboutMe__textContainer">
                    <div className="aboutMe__textContainer__about">
                    <h1 className="homeScreeen__secondSection__title">
                        About
                    </h1>
                    <div className="aboutMe__about__text">
                    &nbsp;&nbsp;&nbsp;&nbsp;I am results-oriented, constantly checking in with the goal to determine how close or how far away we are and what it will take to make it happen. I find this pressure inspiring and a great motivator for the rest of the team.<br></br> <br></br>&nbsp;&nbsp;&nbsp;&nbsp;I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I’m not comfortable with settling, and I’m always looking for an opportunity to do better and achieve greatness.
                    </div>
                    <div className="aboutMe__signature">
                        Mr.S.Munteanu
                    </div>
                    </div>
                    <div className="aboutMe__textContainer__information">
                    <h1 className="homeScreeen__secondSection__title">
                        Information
                    </h1>
                    <div className="aboutMe__information__container">
                        <div className="aboutMe__info">
                            <FontAwesomeIcon icon={faCalendarAlt} size="2x" /><span>12th November, 1997</span> 
                        </div>
                        <div className="aboutMe__info">
                            <FontAwesomeIcon icon={faPhoneAlt} size="2x" /><span> 0743577326</span> 
                        </div>
                        <div className="aboutMe__info">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" /><span> serban.munteanu1211@gmail.com</span> 
                        </div>
                        <div className="aboutMe__info">
                            <FontAwesomeIcon icon={faHome} size="2x" /><span>Orhideelor Street, Bucharest</span> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="aboutMeScreen__skills">
                    <h1 className="homeScreeen__secondSection__title">
                        Skills
                    </h1>
                    <div className="aboutMeScreen__skills__container">
                    <VisibilitySensor>
                        {({ isVisible }) => {
                        return (
                            <SkillsContainers isVisible={isVisible}/>
                        );
                        }}
                    </VisibilitySensor>
                    </div>
            </div>
            <div className="homeScreen__thirdSection margin50">
                    <h1 className="homeScreeen__secondSection__title">
                    {`${t('aboutMePage.section1.title')}`}
                    </h1>
                <div className="homeScreen__thirdSection__container">
                <div className="homeScreen__thirdSection__left w-400 align-center">
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
                <div className="homeScreen__thirdSection__middle w-400">
                    <img src={animoji} alt=""/>
                </div>
                <div className="homeScreen__thirdSection__right w-400 align-center">
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
            <div className="aboutMeScreen__skills">
                    <h1 className="homeScreeen__secondSection__title">
                        Cloud &amp; E-commerce
                    </h1>
                    <div className="aboutMeScreen__skills__container">
                    <VisibilitySensor>
                        {({ isVisible }) => {
                        return (
                            <CloudContainers isVisible={isVisible}/>
                        );
                        }}
                    </VisibilitySensor>
                    </div>
            </div>
        </div>
    )
}

export default AboutMeScreen
