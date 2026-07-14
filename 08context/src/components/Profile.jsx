import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div>Please log in to view your profile.</div>;

    return <div>Welcome, {user.userName}!</div>
}

export default Profile