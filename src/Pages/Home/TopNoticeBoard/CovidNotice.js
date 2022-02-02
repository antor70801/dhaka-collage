import React from 'react';
import gif from '../../../images/rightarrow.gif'
import img from '../../../images/vaccine.png'
const CovidNotice = () => {
    return (
        <div>
            <div>
                <div className="  mt-3">
                    <div className='HSC-container'>
                        <h5 className='Prospect'>স্নাতক ও স্নাতকোত্তর শ্রেণির শিক্ষার্থিদের ভ্যাক্সিন গ্রহণ সংক্রান্ত তথ্য ফরম</h5>
                        <div>
                            <div className="text-center">
                                <img className='mt-2' style={{ width: "60%" }} src={img} alt="" />
                            </div>
                            <div className="m-3 pb-2">
                                <a href="/">
                                    <img width="20" src={gif} alt="" />
                                    <button className='btn text-danger fw-bold'>শিক্ষার্থীদের তথ্য ফরম</button>
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CovidNotice;