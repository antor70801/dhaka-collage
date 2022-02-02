import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/1574051078.png'
const Chairman = () => {
    return (
        <div>
            <div className="text-center admin-img rounded ">
                <h3 className='text-light title py-3 fw-bold'>
                    Chairman's Message
                </h3>
                <div>
                    <img className='img-fluid border border-light border-3' width="40%" src={img1} alt="" />
                </div>
                <h6 className='pt-1'>Prof. Dr. Syed Modasser Ali
                    Chairman
                </h6>
                <p style={{ marginBottom: 0 }} className='pb-4 '> <small><Link to="/chairman-message">  Continue Reading ...</Link></small></p>
            </div>
        </div>
    );
};

export default Chairman;