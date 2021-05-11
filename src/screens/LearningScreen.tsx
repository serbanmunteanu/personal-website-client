import { faJs, faMagento, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import Growth from '../components-svg/Growth';
import Results from '../components-svg/Results';
import Target from '../components-svg/Target';
import Test from '../components-svg/Test';
import axios from '../axios';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

interface ActiveQuestionsProp {
    id: number;
    name: string;
    questions: QuestionsProp[];
}

interface QuestionsProp {
    id: number;
    question: string;
    answers: AnswersProps[]
}

interface AnswersProps {
    id: number;
    data: string;
}

interface ResultProps {
    questionId: number;
    answerId: number;
}

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
            active: true,
            name: 'php'
        },
        {
            logo: faJs,
            active: false,
            name: 'javascript'
        },
        {
            logo: faReact,
            active: false,
            name: 'react'
        },
        {
            logo: faMagento,
            active: false,
            name: 'magento'
        }
    ]);


    const [questions, setQuestions] = React.useState([]);
    const [activeQuestions, setActiveQuestions] = React.useState<ActiveQuestionsProp>();

    const getQuestions = async () => {
        let result;

        try {
            result = await axios({
                method: 'get',
                url: '/api/tests',
            });
            if(result.data) {
                setQuestions(result.data);
                setActiveQuestions(result?.data[0])
            }
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {    
        getQuestions();
    },[])

    const sendSubmission = async (value: any) => {
        try {
            const result = await axios({
                method: 'post',
                url: '/api/tests',
                data: {
                    email: value.email,
                    submissions: value.submissions,
                    category: value.category
                }
            });
            setScore(result.data.grade);
            setTestPercentage(0);
        } catch (error) {
            console.log(error);
        }
    }
    
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [result, setResult] = React.useState<ResultProps[]>([]);
    const [showScore, setShowScore] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [testPercentage, setTestPercentage] = React.useState(0);
    const emailRef = React.useRef(null);
    const [email,setEmail] = React.useState('');

    const handleAnswerOptionClick = (questionId: number, answerId: number, category: string) => {
		const nextQuestion = currentQuestion + 1;
        const newResult = [...result, {questionId, answerId}];
        setResult(newResult);
        setTestPercentage(testPercentage + 100/activeQuestions?.questions.length);

		if (nextQuestion < activeQuestions?.questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
            sendSubmission({email: email, category, submissions: newResult});
            setShowScore(true);
        }
	};

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
                        key={index}
                        whileHover={{scale: 1.2}} 
                        className="mx-5 hover:pointer"
                        onClick={() => {
                            const newState = testCategories.map((data) => {
                                if(data.logo === testItem.logo) {
                                    data.active = true;
                                    setActiveQuestions(questions?.filter(quest => data.name === quest.name)[0])
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

            {showScore ? (
				<div className='text-center'>
					Congrat's. Your score is {score}/{activeQuestions?.questions.length}
				</div>
			) : (
				<>
                    <div className="flex justify-center">
                        {
                            email === '' ? (
                                <form className="flex flex-col w-1/4 px-10">
                                    <label className="mb-3 text-xl">Email</label>
                                    <input ref={emailRef} className="contactForm__input glass mb-2" type="email"/>
                                    <button className="contactForm__button colored"
                                            onClick={(e) => { 
                                                e.preventDefault();
                                                setEmail(emailRef.current.value);
                                            }}
                                    >Next</button>
                                </form>
                            ) : (
                                <>
                                     <div className="flex flex-col justify-evenly w-2/6">
                                        <div className='text-xl font-serif'>{activeQuestions?.questions[currentQuestion].question}</div>
                                        <div className='font-serif text-gray-300'>
                                            {activeQuestions?.questions[currentQuestion].answers.map((answerOption,index) => (
                                                <div className="hover:text-white">
                                                    <button onClick={() => handleAnswerOptionClick(
                                                        activeQuestions?.questions[currentQuestion].id,
                                                        answerOption.id, 
                                                        activeQuestions?.name
                                                    )}
                                                    className="focus:outline-none"
                                                    >{index+1}.{answerOption.data}</button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )
                        } 
                       <div className="container w-1/12 align-center">
                        <CircularProgressbarWithChildren
                                value={testPercentage}
                                styles={{
                                    path: {
                                        stroke: '#F53689',
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                    },
                                    trail: {
                                        stroke: 'rgba(255,255,255,.6)'
                                    }
                            }}> 
                                <h1 className="text-3xl">{testPercentage}%</h1>
                            </CircularProgressbarWithChildren>
                       </div>
                    </div>
				</>
			)}
            
           
        </div>
    )
}

export default LearningScreen
