import React from 'react';
import { Link } from 'react-router-dom';

const SigninLinks = () => {
    return (

        <div className="MyRow link">
            <div className="visitorStatHed1">
                <img className='mx-1' width='30' src="https://www.dhakacitycollege.edu.bd/images/admission1.png" alt="" />
                SIGNIN LINKS
            </div>

            <table style={{ width: '100%' }} class="table link">
                <tbody className='text-light'>
                    <tr style={{ borderBottom: "2px solid white" }}>
                        <th scope="row">
                            <button className='signup-btn'> <Link to='/login'> HSC Login 2020-21</Link> </button>
                        </th>
                    </tr>
                    <tr style={{ borderBottom: "2px solid white" }}>
                        <th scope="row">
                            <button className='login-btn1'> <Link to='/login'>  Honours / Master Login</Link> </button>
                        </th>
                    </tr>
                    <tr style={{ borderBottom: "2px solid white" }}>
                        <th scope="row">
                            <button className='login-btn2'> <Link to="/login" >    HSC Login 2019-20</Link> </button>
                        </th>
                    </tr >
                    <tr style={{ borderBottom: "2px solid white" }}>
                        <th scope="row">
                            <button className='signup-btn'> <Link to="/login" >Honours / Master Login (bKash Payment)</Link>   </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default SigninLinks;