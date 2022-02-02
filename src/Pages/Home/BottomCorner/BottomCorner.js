import React from 'react';
import { Link } from 'react-router-dom';
import ico1 from '../../../images/ico1.png'
import ico2 from '../../../images/ico2.png'
import ico3 from '../../../images/ico3.png'
import ico4 from '../../../images/ico4.png'
import ico5 from '../../../images/ico5.png'
import ico6 from '../../../images/ico6.png'

const BottomCorner = () => {
    return (
        <div className='text-center m-3' >
            <div className="row">
                <div className="col-2 col-lg-2 col-md-2">
                    <Link className='bottom-section-button'>
                        <img className='h-50' src={ico1} alt="" />
                        <h6 className='fw-bold pt-2'>এইচএসসি কর্ণার
                        </h6>
                    </Link>
                </div>
                <div className="col-2 col-lg-2 col-md-2">
                    <Link className='bottom-section-button'>
                        <div><img className='h-50' src={ico2} alt="" /></div>
                        <h6 className='pt-2 fw-bold'>ভর্তি কর্ণার</h6>
                    </Link>
                </div>
                <div className="col-2 col-lg-2 col-md-2">
                    <Link className='bottom-section-button'>
                        <div><img src={ico3} alt="" /></div>
                        <h6 className='pt-2 fw-bold'>অনার্স কর্ণার</h6>
                    </Link>
                </div>
                <div className="col-2 col-lg-2 col-md-2">
                    <Link className='bottom-section-button'>
                        <div><img src={ico4} alt="" /></div>
                        <h6 className='pt-2 fw-bold'>মাস্টার্স  কর্ণার</h6>
                    </Link>
                </div>
                <div className="col-2 col-lg-2 col-md-2">

                    <Link className='bottom-section-button'>
                        <div><img src={ico5} alt="" /></div>
                        <h6 className='pt-2 fw-bold'>MSC IN CSE</h6>
                    </Link>
                </div>
                <div className="col-2 col-lg-2 col-md-2">
                    <Link className='bottom-section-button'>
                        <div><img src={ico6} alt="" /></div>
                        <h6 className='pt-2 fw-bold'>MSC IN CSE</h6>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BottomCorner;