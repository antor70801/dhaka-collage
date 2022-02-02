import React from 'react';
import img from '../../../images/BKash-bKash-Logo.wine.svg'

const BKash = () => {
    return (
        <div className="bkash">
            <div className=''>
                <h3 className='bKashHead'>How To Pay With bKash</h3>
                <div>
                    <img className='bKashImg' src={img} alt="" />
                    <h4 className='text-center mx-2'><button className='btn pay-btn'>How To Pay With bKash</button></h4>
                    <h4 className='text-center mx-2'><button className='btn d-btn'>Honurs Professional (BBA & CSE) Admisson (2020-2021)</button></h4>
                    <h4 className='text-center mx-2'><button className='btn d-btn'>MBA and M.sc in CSE (Professional) Admission / Master Admission: 2016/17 </button></h4>
                </div>
            </div>
        </div>
    );
};

export default BKash;