import React from 'react';
import { Link } from 'react-router-dom';

const VicePrinciple = () => {
    return (
        <div>
            <div className="text-center admin-img rounded  ">
                <h3 className='text-light title py-3 fw-bold'>
                    Vice principal
                </h3>
                <div>
                    <img className='img-fluid border border-light border-3' width="40%" src="https://www.dhakacitycollege.edu.bd/images/geninfo/1574051094.jpg" alt="" />
                </div>
                <h6 className='pt-1'>Prof. Md. Anwar Hossain
                    Vice principal
                </h6>
                <p style={{ marginBottom: 0 }} className='pb-4 '> <small> <Link to="/vice-principal-message">Continue Reading ...</Link></small></p>
            </div>
        </div>
    );
};

export default VicePrinciple;