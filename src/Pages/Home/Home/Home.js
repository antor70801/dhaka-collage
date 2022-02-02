import React from 'react';
import Footer from '../../../Shared/Footer';
import NavigationBar from '../../../Shared/NavigationBar';
import Banner from '../Banner/Banner'
/* import BottomCorner from '../BottomCorner/BottomCorner'; */
import Depertments from '../Depertments/Depertments';
import TopNoticeBoard from '../TopNoticeBoard/TopNoticeBoard'

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div style={{ paddingTop: 107 }} className='container'>
          
                <Banner></Banner>
                <TopNoticeBoard></TopNoticeBoard>
                <Depertments></Depertments>
                {/*       <BottomCorner></BottomCorner> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;

/* 


/* 

// https://i.ibb.co/r6LJbbj/faculty.png
// https://i.ibb.co/YLHTVGy/ico5.png
// https://i.ibb.co/pwcnWqw/ico6.png
// https://i.ibb.co/wyV0PyX/icon4.png
// https://i.ibb.co/TmYs6Nk/icon9.png
// https://i.ibb.co/yFKJT1K/icon10.png
// https://i.ibb.co/v3CNGPR/icon11.png
// https://i.ibb.co/wB0Cd8F/lecture-icon.png
// https://i.ibb.co/9gtR65d/star1.png
// https://i.ibb.co/tmmcjpz/students-Info.png
// 

*/