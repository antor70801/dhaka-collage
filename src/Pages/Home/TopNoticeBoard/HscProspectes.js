import React from 'react';
import gif from '../../../images/rightarrow.gif'
import img from '../../../images/prospectusicon.png'

const HscProspectes = () => {
    return (
        <div>
            <div className="  mt-3">
                <div className='HSC-container'>
                    <h5 className='Prospect'>HSC (XI & XII) প্রসপেক্টাস</h5>
                    <div>
                        <div className="text-center">
                            <img className='mt-2' style={{ width: "60%" }} src={img} alt="" />
                        </div>
                        <div className="m-3 pb-3">
                            <a href="/">
                                <img width="20" src={gif} alt="" />
                                <button className='btn text-danger fw-bold'>HSC SESSION: 20-21</button>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HscProspectes;