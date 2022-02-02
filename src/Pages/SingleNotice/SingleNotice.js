import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nicon from '../../images/notice.png'
import Footer from '../../Shared/Footer';
import NavigationBar from '../../Shared/NavigationBar';

const SingleNotice = () => {


    const { id } = useParams();


    const [noticeInformation, setNoticeInformation] = useState([])

    useEffect(() => {
        fetch('./projectData.json')
            .then(res => res.json())
            .then(data => setNoticeInformation(data))
    }, [noticeInformation]);
    console.log(noticeInformation);
    console.log(id);

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='m-3' style={{ paddingTop: 107 }}>
                <div>
                    <section id="features">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12" style={{ background: '#fff' }}>
                                    <h3 style={{ color: '#fff', padding: '10px', backgroundColor: '#00bfa5', borderRadius: '3px' }}><img src={Nicon} alt='' width='40' /> Notice </h3>
                                    <div id="leftcolumn" style={{ textAlign: 'justify', fontSize: '15px', color: '#000', padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '3px' }}>
                                        <div>
                                            <div class="sectiontitle">
                                            </div>
                                            <div style={{ marginTop: '10px' }}>
                                                <table class="table table-hover table-bordered notice " style={{ width: '100%', margin: 'auto' }}>
                                                    <tbody className='notice'>
                                                        <tr >
                                                            <td>Notice Title </td>
                                                            <td style={{ color: 'brown', fontWeight: 'bold' }}> For Vaccination Information of NU Students and All Concerned   </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Notice Details </td>
                                                            <td> For details notice click on View Full Notice.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '16%' }}>Notic Published</td>
                                                            <td style={{ color: 'black', fontWeight: 'bold' }}>  13-01-2022  </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Notice File </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">
                                                                <img src="https://dotcom.vip/dcc/upload/NU13012022.jpg" width="100%" alt='' />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Notice By </td>
                                                            <td>
                                                                <table>
                                                                    <tr>
                                                                        <td style={{ border: '0px' }}>
                                                                            <img src="https://www.dhakacitycollege.edu.bd/images/geninfo/1613388769.jpg" alt='' width="60" style={{ paddingRight: '10px' }} />
                                                                        </td>
                                                                        <td style={{ border: '0px' }}> Professor Bedar Uddin Ahmed<br /> Principal<br /> DHAKA CITY COLLEGE </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Notice Details </td>
                                                            <td>
                                                                <a href="https://dotcom.vip/dcc/upload/NU13012022.jpg" class="btn btn-danger" > View Full Notice </a>
                                                            </td> </tr>
                                                        <tr>
                                                            <td>Goto Home </td>
                                                            <td> <Link to="/" class="button" style={{ width: '105px' }}> BACK </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </section >
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default SingleNotice;