import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import axios from '../axios';
import { UserContext } from '../state.provider';

function Login() {
    const { t } = useTranslation();
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const history = useHistory();
    const {setUser} = useContext(UserContext);

    const login = async (event: any) => {
        event.preventDefault();

        const result = await axios({
            method: 'post',
            url: '/api/login',
            data: {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
        });


        if(result.data) {
            setUser(result.data);
            localStorage.setItem('user', JSON.stringify(result.data));
            history.push('/my-account');
        }
    }

    return (
        <div className="login">
            <form className="flex flex-col font-serif">
                    <label className="container mt-3 mb-2 text-xl">{t('login.email')}</label>
                    <input  ref={emailRef} className="contactForm__input glass" type="text"/>
                    <label className="container mt-3 mb-2 text-xl">{t('login.password')}</label>
                    <input  ref={passwordRef} className="contactForm__input glass" type="password"/>
                    <div className="container my-3">
                    <button 
                        onClick={(e) => login(e)}
                        className="contactForm__button colored">{t('login.connect')}</button>
                    </div>
                </form>
        </div>
    )
}

export default Login
