import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../state.provider';
import axios from '../axios';

function Register() {
    const { t } = useTranslation();
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const repeatPasswordRef = React.useRef(null);
    const history = useHistory();
    const {setUser} = useContext(UserContext);
    const [errors, setErrors] = React.useState(null);

    const register = async (event: any) => {
        event.preventDefault();
        let result;
        if(passwordRef.current.value !== repeatPasswordRef.current.value) {
            setErrors("Password not matching password");
            return;
        }

        try {
            result = await axios({
                method: 'post',
                url: '/api/signup',
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
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login">
        <form className="loginForm">
                <label className="contactForm__label">{t('login.email')}</label>
                <input ref={emailRef} className="contactForm__input glass" type="text"/>
                <label className="contactForm__label">{t('login.password')}</label>
                <input ref={passwordRef} className="contactForm__input glass" type="password"/>
                <label className="contactForm__label">{t('login.password')} repeat</label>
                <input ref={repeatPasswordRef} className="contactForm__input glass" type="password"/>
                <div className="contactForm__div__button">
                <button 
                    onClick={(e) => register(e)}
                    className="contactForm__button colored">Register</button>
                </div>
                {
                    errors
                }
            </form>
    </div>
    )
}

export default Register
