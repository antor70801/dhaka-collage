import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../images/1613388769.jpg'
const Principle = () => {
    return (
        <div>
            <div className="text-center admin-img rounded  ">
                <h3 className='text-light title py-3 fw-bold'>
                    College Administration
                </h3>
                <div>
                    <img className='img-fluid border border-light border-3' width="40%" src={img2} alt="" />
                </div>
                <h6 className='pt-1'>Professor Bedar Uddin Ahmed
                    Principal
                </h6>
                <p style={{ marginBottom: 0 }} className='pb-4 '> <small> <Link to="/principal-message">Continue Reading ...</Link></small></p>
            </div>
        </div>
    );
};

export default Principle;