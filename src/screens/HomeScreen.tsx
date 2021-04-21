import React from 'react';
import FirstImageHome from '../components-svg/FirstImageHome';
import gsap, {TweenLite} from 'gsap';
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SocialMedia from '../containers/SocialMedia';
import QuickWork from '../containers/QuickWork';
import animoji from './animoji4.png';
import Notification from '../components/Notification';
import RedCheck from '../components-svg/RedCheck';
import BlueCheck from '../components-svg/BlueCheck';
import LearningSearch from '../components-svg/LearningSearch';
import ContactForm from '../components/ContactForm';
import Mail from '../components-svg/Mail';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from '../containers/Testimonials';

function HomeScreen() {
    const history = useHistory();
    const { t } = useTranslation();

    // React.useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap
    //         .timeline({scrollTrigger: ".homeScreen__firstSection"})
    //         .from('.Screen', {
    //             opacity: 0,
    //             duration: 0.3,
    //             ease: "power2.in",
    //         })
    //         .from('.homeScreen__firstSection__left',{
    //             opacity: 0,
    //             duration: 0.4,
    //             ease: "power2.in",
    //         })
    //         .from('.rest', {
    //             opacity: 0,
    //             duration: 0.4,
    //             x: 50,
    //             ease: "power2.in"
    //         })
    //         .from('.homeScreen__buttons', {
    //             opacity: 0,
    //             duration: 0.4,
    //             stagger: 0.5,
    //             ease: "power3.in"
    //         });

    //     gsap
    //         .timeline({scrollTrigger: {
    //             trigger: ".homeScreen__secondSection",
    //         }})
    //         .from('#section2',{
    //             opacity: 0,
    //             duration: 0.8,
    //             y: 100,
    //             ease: "power2.easeInOut"
    //         })
    //         .from(".work", {
    //             opacity: 0,
    //             duration: 0.5,
    //             stagger: 0.4,
    //             ease: "power2.in"
    //         });

        
    //     gsap
    //         .timeline({scrollTrigger: {
    //             trigger: '.homeScreen__thirdSection',
    //         }})
    //         .from('.notification, .skill_test',{
    //             stagger: 0.4,
    //             opacity:0,
    //             ease: "power2.easeIn",
    //             y: 50
    //         });
        
    //     TweenLite.fromTo("#last-image",1.3,{x:-40,y:-40,opacity:0},{scrollTrigger: '.homeScreen__thirdSection',rotation:360,x: 0,y:-4, opacity:1});
    //     TweenLite.fromTo("#middle-img",1.3,{x:40, y:-40,opacity:0},{scrollTrigger: '.homeScreen__thirdSection',rotation:-360, x:0,y:0, opacity:1});
    //     TweenLite.fromTo("#top-img",1.5,{y:-100,opacity:0},{scrollTrigger: '.homeScreen__thirdSection',y:0,opacity:1});
    //     TweenLite.from("#icon-up", {delay: 1,scrollTrigger: '.homeScreen__thirdSection',opacity:0, ease: "power2.easeIn", y:20, duration: 0.6});

    // },[])

    return (
        <div
            className="m-5">
            <div className="container flex flex-col-reverse md:flex-row mx-auto">
                <div className="md:container md:m-5 justify-center flex flex-col md:max-w-lg">
                    <div className="flex uppercase tracking-wide font-serif my-5">
                        <h3 className="color-red">
                            {`${t('firstPage.section1.hello')}`}
                        </h3>
                        &nbsp;<br></br>
                        <h3>{t('firstPage.section1.i-am')}</h3>
                    </div>
                    <h1 className="text-4xl md:text-5xl uppercase font-serif mb-5">
                        {t('firstPage.section1.function')}
                    </h1>
                    <p className="text-lg my-5 text-gray-400 font-serif">
                        {t('firstPage.section1.title')}
                    </p>
                    <div className="homeScreen__buttons">
                        <motion.button 
                            whileHover={{scale: 1.2}} 
                            className="homeScreen_button colored"
                            onClick={() => history.push('/contact-me')}
                        >
                            {t('firstPage.section1.button-1')}
                        </motion.button>
                        <motion.button 
                            whileHover={{scale: 1.2}} 
                            className="homeScreen_button glass-button"
                            onClick={() => history.push('/learning')}
                        >
                            {t('firstPage.section1.button-2')}
                        </motion.button>
                    </div>  
                    <SocialMedia/>
                </div>
                <FirstImageHome/>
            </div>
            <div className="container mx-auto flex flex-col my-12">
                    <h3 id="section2" className="color-red text-center uppercase tracking-wider text-xl font-serif">
                    {t('firstPage.section2.title')}
                    </h3>
                    <h1 id="section2" className="text-center uppercase text-2xl">
                    {`${t('firstPage.section2.pretitle')}`}
                    </h1>
                <div className="container mt-5">
                    <QuickWork/>
                </div>
            </div> 
            <div className="container mx-auto flex flex-col md:flex-row justify-evenly">
                    <div className="container flex flex-col">
                    <h1 className="center text-5xl mb-5 md:mt-16 md:mb-5 md:ml-16 font-serif md:text-7xl">{t('firstPage.section4.title')}</h1>
                    <h4 className="mb-5 md:mb-5 md:ml-16 font-serif text-gray-300">{t('firstPage.section4.subtitle')}</h4>
                    <div className="button mb-10 md:ml-16"> 
                        <motion.button 
                            whileHover={{scale: 1.2}} 
                            className="homeScreen_button colored"
                            onClick={() => history.push('/learning')}
                        >
                            {t("firstPage.section4.button")}
                        </motion.button>
                    </div>
                    </div>
                <div className="md:container">
                    <LearningSearch />
                </div>
            </div>
                <div className="md:container md:mx-auto flex flex-col-reverse md:flex-row justify-evenly md:-mt-16">
                <div className="mx-auto w-full md:w-2/4">
                    <img className="mx-auto" src={animoji} alt=""/>
                </div>
                <div className="container flex flex-col">
                    <Notification 
                        logo={<RedCheck/>}
                        fontAwesomeIcon={false}
                        title='firstPage.section3.question1.question'
                        subtitle='firstPage.section3.question1.answer'
                        flexDirectionType='row-reverse'
                    />
                    <Notification 
                        logo={<BlueCheck/>}
                        fontAwesomeIcon={false}
                        title='firstPage.section3.question2.question'
                        subtitle='firstPage.section3.question2.answer'
                        flexDirectionType='row'
                    />
                    <Notification 
                        logo={<RedCheck/>}
                        fontAwesomeIcon={false}
                        title='firstPage.section3.question3.question'
                        subtitle='firstPage.section3.question3.answer'
                        flexDirectionType='row-reverse'
                    />
                </div>
                </div>
            <div className="my-10 md:container md:mx-auto flex flex-col md:flex-row justify-evenly">
                <div className="w-full md:container">
                    <ContactForm />
                </div>
                <div className="w-full my-10 md:container flex justify-center">
                <Mail />
                </div>
            </div>
            <div className="md:container md:mx-auto">
                <h3 id="section6-title" className="color-red text-center uppercase tracking-wider text-xl font-serif">
                    {t('testimonials.subtitle')}
                    </h3>
                <h1 id="section6-subtitle" className="text-center uppercase text-2xl">
                    {`${t('testimonials.title')}`}
                </h1>
                <Testimonials/>
            </div>
        </div>
    )
}

export default HomeScreen;