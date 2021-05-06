import { faJs, faMagento, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import Growth from '../components-svg/Growth';
import Results from '../components-svg/Results';
import Target from '../components-svg/Target';
import Test from '../components-svg/Test';

function LearningScreen() {
    const [ways,] = React.useState([
        {
            name: 'Take test now',
            item: <Test />
        }, 
        {
            name: 'Check your results',
            item: <Results />
        },
        {
            name: 'Establish new goals',
            item: <Target />
        },
        {
            name: 'See your evolution',
            item: <Growth />
        }
    ]);

    const [testCategories,setTestCategories] = React.useState([
        {
            logo: faPhp,
            active: true
        },
        {
            logo: faJs,
            active: false,
        },
        {
            logo: faReact,
            active: false,
        },
        {
            logo: faMagento,
            active: false
        }
    ]);
    return (
        <div className="mx-5 my-5">
            <h1 className="text-2xl text-center font-serif uppercase tracking-wider">Web development for beginners<h1 className="color-red">how it work's</h1> </h1> 
            <div className="flex flex-col md:flex-row items-center justify-evenly mt-10 mb-5">
                {
                    ways.map((way,index) => <div className="mx-5 w-2/3 md:w-1/5"> {way.item} <div className="text-center font-serif text-xl -mt-5 mb-5">{`${index}. ${way.name}`}</div> </div>)
                }
            </div>

            <h1 className="text-3xl text-center font-serif uppercase tracking-wider color-red mx-5">categories</h1>
            <div className="flex items-center justify-center my-5">
                {
                    testCategories.map((testItem, index) => <motion.div 
                        whileHover={{scale: 1.2}} 
                        className="mx-5 hover:pointer"
                        onClick={() => {
                            const newState = testCategories.map((data) => {
                                if(data.logo === testItem.logo) {
                                    data.active = true;
                                } else {
                                    data.active = false;
                                }
                                return data;
                            });
                            setTestCategories(newState);
                        }}
                        > 
                        <FontAwesomeIcon icon={testItem.logo} size="3x" className={testItem.active ? 'color-blue' : ''}/>
                      </motion.div>)
                }
            </div>
        </div>
    )
}

export default LearningScreen
