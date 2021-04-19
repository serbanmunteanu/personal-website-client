import React, { useContext, useEffect } from 'react'
import axios from '../axios';
import { UserContext } from '../state.provider';

const MyAccountScreen = () => {
    const [userInfo, setUserInfo] = React.useState(null);
    const {user, setUser} = useContext(UserContext);

    const getUser = async () => {
        let result;

        try {
            result = await axios({
                method: 'get',
                url: '/api/user',
                headers: {
                    Authorization: user.token
                }
            });
            if(result.data) {
                setUserInfo(result.data);
            }
        } catch (error) {
            if(error.response.data.statusCode === 401) {
                localStorage.removeItem('user');
                setUser(null);
            }
        }
    }

    useEffect(() => {
        getUser();
    },[]);

    return (
        <div>
            {
                userInfo?.permissions.type
            }
        </div>
    )
}

export default MyAccountScreen
