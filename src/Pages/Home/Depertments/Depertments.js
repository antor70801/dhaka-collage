import React from 'react';
import Accounting from './Deperment/Accounting';
import Management from './Deperment/Management';
import BBA from './Deperment/BBA'
import EnglishDept from './Deperment/EnglishDept';
import MarketingDept from './Deperment/MarketingDept';
import CseDept from './Deperment/CseDept';

const Depertments = () => {
    return (
        <div style={{ borderColor: '#E3F1FC' }} className=' border-end border-start border-2  px-3 pt-2'>
            <h1 className='dept-section-title py-3'>
                জাতীয় বিশ্ববিদ্যালয়ের অধিভুক্ত ঢাকা সিটি কলেজ-এর অনার্স বিভাগসমূহ
            </h1>
            <div className="row">

                <div className="col-lg-6 col-md-6 col-12">
                    <Accounting></Accounting>
                    <EnglishDept></EnglishDept>
                    <MarketingDept></MarketingDept>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <Management></Management>
                    <BBA></BBA>
                    <CseDept></CseDept>

                </div>

            </div>
        </div>
    );
};

export default Depertments;