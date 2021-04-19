import React from 'react'
import LoginCard from '../components-svg/LoginCard'
import Login from '../components/Login';
import Register from '../components/Register';

function LoginScreen() {
    const [register, setRegister] = React.useState(false);

    return (
        <div className="md-5 flex flex-col md:flex-row">
            <LoginCard />
                <div className="loginContainer">
                <div className="types">
                    <span onClick={() => setRegister(false)} className={`${register ? '' : 'inactive'}`} >Log in</span>
                    <span onClick={() => setRegister(true)} className={`${register ? 'inactive' : ''}`}>No account ? Register now</span>
                </div>
                {
                    register ? <Register /> : <Login />
                }
                </div>
        </div>
    )
}

export default LoginScreen
