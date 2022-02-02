import React from 'react';
import logo from '../../../images/dcc.png'
import how1 from '../../../images/HOWTOFILLUPFORM11.png'
import how2 from '../../../images/HOWTOFILLUPFORM12.png'
import how3 from '../../../images/HOWTOFILLUPFORM13.png'

const HowToFill = () => {
    return (
        <div className='m-3' style={{ paddingTop: 107 }}>
            <div class="mainbody">
            <div class="header">
                    <div class="headerleft">
                        <img src={logo} alt='' />
                    </div>
                    <div class="headermid">
                        <h1>DHAKA CITY COLLEGE</h1>
                        <h2>Road No. 02, Dhanmondi R/A, Dhaka: 1205, Bangladesh.</h2>
                        <h2>HOW TO FILL-UP FORM - HONS/MS</h2>
                    </div>
                    <div class="headerright">

                    </div>
                </div>
                <div class="bodydiv">
                    <img src={how1} alt='' class='ac' />
                    <img src={how2} alt='' class='ac' />
                    <img src={how3} alt='' class='ac' />

                </div>
            </div>

        </div>
    );
};

export default HowToFill;