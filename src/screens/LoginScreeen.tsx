import React from 'react'
import LoginCard from '../components-svg/LoginCard'
import Login from '../components/Login';
import Register from '../components/Register';

function LoginScreen() {
    const [register, setRegister] = React.useState(false);

    return (
        <div className="m-5 flex flex-col md:flex-row">
            <LoginCard />
                <div className="container md:w-1/5 flex flex-col-reverse justify-center mx-auto md:ml-5 md:mr-auto md:pb-16">
                <div>
                    <span onClick={() => setRegister(false)} className={`${register ? '' : 'inactive'} cursor-pointer`} >Do you have account ? <span className="color-red hover:underline">Log in.</span> </span>
                    <span onClick={() => setRegister(true)} className={`${register ? 'inactive' : ''} cursor-pointer`}>No account ? <span className="color-red hover:underline">Register now.</span> </span>
                </div>
                {
                    register ? <Register /> : <Login />
                }
                </div>
        </div>
    )
}

export default LoginScreen
