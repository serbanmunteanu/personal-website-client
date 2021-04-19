import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import instance from '../axios';
import { UserContext } from '../state.provider';

function ContactForm() {
    const { t } = useTranslation();
    const nameRef = React.useRef(null);
    const emailRef = React.useRef(null);
    const messageRef = React.useRef(null);
    const [isMessageSent, setIsMessageSent] = React.useState(false);
    const [errors, setErrors] = React.useState(null);
    const [message, setMessage] = React.useState('');
    const {user} = useContext(UserContext);
    const username = (user?.firstName && user?.lastName) ? `${user.firstName} ${user.lastName}` : null;

    const sendMessage = async (event: any) => {
        event.preventDefault();
        const response = await instance({
            method: 'post',
            url: '/api/contact',
            data: {
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
            }
        });
        if (response.data.status === 'Success') {
            setMessage(response.data.message);
            setIsMessageSent(true);
        } else if(response.status !== 201) {
            setErrors('Something went wrong. Please try again later.');
        }
    }

    return (
        <div className="md:ml-10 md:mr-24 font-serif">
            <h1 className="color-red text-7xl mb-5">
                {t('contactForm.title')}
            </h1>
            <p className="text-gray-300">
                {t('contactForm.subtitle')}
            </p>
            {
                !isMessageSent ?
                 (<form className="flex flex-col">
                    <label className="mt-5 mb-1 text-xl">{t('contactForm.labels.name')}</label>
                    <input ref={nameRef} value={username} className="contactForm__input glass" type="text"/>
                    <label className="mt-5 mb-1 text-xl">{t('contactForm.labels.email')}</label>
                    <input ref={emailRef} value={user?.email} className="contactForm__input glass" type="email"/>
                    <label className="mt-5 mb-1 text-xl">{t('contactForm.labels.message')}</label>
                    <textarea ref={messageRef} className="contactForm__textarea glass" name="" id="" cols={30} rows={8}></textarea>
                    <div className="contactForm__div__button">
                    <button 
                        onClick={(e) => sendMessage(e)}
                        className="contactForm__button colored">{t('contactForm.button')}</button>
                    </div>
                    {
                        errors !== '' && <p>{errors}</p>
                    }
                </form>) 
                :
                <p>{message}</p> 
            }
        </div>
    )
}

export default ContactForm
