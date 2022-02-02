import React from 'react';
import { Link } from 'react-router-dom';

const SignupLinks = () => {
    return (
        <div className="MyRow link">
            <div className="visitorStatHed1">
                <img className='mx-1' width='30' src="https://www.dhakacitycollege.edu.bd/images/admission1.png" alt="" />
                SIGNUP LINKS
            </div>
            <table style={{ width: '100%' }} class="table ">
                <tbody className='text-light'>
                    <tr style={{ borderBottom: "2px solid white" }}>
                        <th scope="row">
                            <button className='signup-btn'> <Link to="/signup"> Honours / Master Admission</Link></button>
                        </th>
                    </tr>
                    <tr style={{ borderBottom: "2px solid white" }}>
                        <th scope="row">
                            <button className='signup-btn'> <Link to="/signup"> How Form Fill-Up(Hons/MS)</Link>   </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SignupLinks;