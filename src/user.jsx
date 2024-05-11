import React from "react";

import {Link} from "react-router-dom"

function User(){
    return(
            <div className="home">
                <h1>ini adalah halaman user</h1>

                <table>
                    
                </table>
                <Link to="/createUser" className="btn btn-primary">Create User</Link>
            </div>
    );
}

export default User;