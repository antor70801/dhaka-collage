import AboutCollage from './AboutCollage';
import BKash from './BKash'
import CovidNotice from './CovidNotice';
import HonsDeperment from './HonsDeperment';
import HscProspectes from './HscProspectes';
import Marqueee from './Marqueee';
import SigninLinks from './SigninLinks';
import SignupLinks from './SignupLinks';
import TopNotice from './TopNotice';

const TopNoticeBoard = () => {

    return (
        <div style={{ borderColor: '#E3F1FC' }} className=' border-end border-start border-2  px-3 pt-2'>
            <div className='m-1'>
                <Marqueee></Marqueee>

                <div>
                    <div className="row ">
                        <div className="col-lg-3 col-md-3 col-12 ">
                            <SignupLinks></SignupLinks>
                            {/* ======================কলেজ সম্পর্কিত তথ্য====================== */}
                            <div className="aboutCollage">
                                <AboutCollage></AboutCollage>
                            </div>
                            <HscProspectes></HscProspectes>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <TopNotice></TopNotice>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <SigninLinks></SigninLinks>
                            <BKash></BKash>
                            <HonsDeperment></HonsDeperment>
                            <CovidNotice></CovidNotice>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TopNoticeBoard;