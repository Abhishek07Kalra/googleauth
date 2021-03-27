import React from 'react';
import {auth} from './firebase';
const Mainpage = ()=>{
    const logout = () => {
        auth.signOut();
    }
    return (
        <div>
            Welcome
            &nbsp;
            {
                auth.currentUser.email
            }
            <button style={{"marginLeft" : "20px"}} onClick={logout}>
                Logout
            </button>
        </div>
    );
}
export default Mainpage;