import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../images/logo.png'
const Footer = () => {
    return (
        <div>
            <div className='footer-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <h5 className='footer-head-line pb-2'>অনার্স বিভাগ সমূহের লিংক</h5>
                            <ul className='list-style'>
                                <li><Nav.Link to="http://www.cse.dhakacitycollege.edu.bd" target='_blank'>Dept. of CSE</Nav.Link></li>
                                <li><Nav.Link href="http://www.bba.dhakacitycollege.edu.bd" target='_blank'>Dept. of BBA</Nav.Link></li>
                                <li><Nav.Link href="http://www.accounting.dhakacitycollege.edu.bd" target='_blank'>Dept. of Accounting</Nav.Link></li>
                                <li><Nav.Link href="http://www.english.dhakacitycollege.edu.bd" target='_blank'>Dept. of English</Nav.Link></li>
                                <li><Nav.Link href="http://www.bangla.dhakacitycollege.edu.bd" target='_blank'>Dept. of Bangla </Nav.Link></li>
                                <li><Nav.Link href="http://www.management.dhakacitycollege.edu.bd" target='_blank'>Dept. of Management </Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <h5 className='footer-head-line pb-2'>শিক্ষার্থী লগইন লিংক</h5>
                            <ul className='list-style'>
                                <li><Nav.Link to="http://www.cse.dhakacitycollege.edu.bd" target='_blank'>MBA/MSC in CSE Student Login</Nav.Link></li>
                                <li><Nav.Link href="http://www.bba.dhakacitycollege.edu.bd" target='_blank'>All Masters Student Login</Nav.Link></li>
                                <li><Nav.Link href="http://www.accounting.dhakacitycollege.edu.bd" target='_blank'>All Honors Student Login</Nav.Link></li>
                                <li><Nav.Link href="http://www.english.dhakacitycollege.edu.bd" target='_blank'>XII Class Student Login 2019-20</Nav.Link></li>
                                <li><Nav.Link href="http://www.bangla.dhakacitycollege.edu.bd" target='_blank'>XI Class Student Login 2020-21 </Nav.Link></li>
                                <li><Nav.Link href="http://www.management.dhakacitycollege.edu.bd" target='_blank'>Dept. of Marketing </Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <h5 className='footer-head-line pb-2'>শিক্ষার্থী নিবন্ধন লিংক</h5>
                            <ul className='list-style'>
                                <li><Nav.Link to="http://www.cse.dhakacitycollege.edu.bd" target='_blank'>MBA/MSC in CSE Admission</Nav.Link></li>
                                <li><Nav.Link href="http://www.bba.dhakacitycollege.edu.bd" target='_blank'>All Masters Admission</Nav.Link></li>
                                <li><Nav.Link href="http://www.accounting.dhakacitycollege.edu.bd" target='_blank'>All Honors Admission</Nav.Link></li>
                                <li><Nav.Link href="http://www.english.dhakacitycollege.edu.bd" target='_blank'>XI Class Admission 2019-20</Nav.Link></li>
                                <li><Nav.Link href="http://www.bangla.dhakacitycollege.edu.bd" target='_blank'>XII Class Admission 2018-19 </Nav.Link></li>
                                <li><Nav.Link href="http://www.management.dhakacitycollege.edu.bd" target='_blank'>Dept. of Economics</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <h5 className='footer-head-line pb-2'>যোগাযোগের ঠিকানা</h5>
                            <div class="Address">
                                <p><i class="fa fa-map-marker "></i> ঠিকানা:
                                    Road No. 02, Dhanmondi R/A, Dhaka: 1205, Bangladesh.</p>
                                <p><i class="fa fa-phone"></i> ফোন:
                                    +88-02-58610294 </p>
                                <p><i class="fa fa-fax"></i> ফ্যাক্স:
                                    +88-02-9675529 </p>
                                <p><i class="fa fa-envelope"></i> dhakacollege1250@gmail.com</p>
                                <p><i class="fa fa-star"></i> EIIN-
                                    107975,  NU Code-
                                    6408</p>
                                <p><i class="fa fa-home"></i> College Code: 1250</p>

                            </div>

                        </div>
                    </div>


                </div>

            </div>
            <div style={{ backgroundColor: "#F2F2F2" }} className="">
                <div className="container">

                    <div className='d-flex justify-content-end py-4'>
                        <h3 className='px-5 text-secondary'>Devoloped By: </h3>
                        <img alt=' ' src={logo} width="250" height="40" />
                    </div>


                    {/*  <table className='table' >
                        <tr >
                            <td width="5" align="left" valign="bottom" bgcolor="#F2F2F2" class="footer_text "></td>
                            <td width="356" height="70" align="left" valign="middle" bgcolor="#F2F2F2" class="footer_text">&copy;2022  All rights reserved.</td>
                            <td className='' width="150" height="70" align="right" valign="middle" bgcolor="#F2F2F2" class="footer_text"><small className='text-secondary'>Powered by</small>
                            </td>
                            <td class="px-3"> </td>
                        </tr>
                    </table> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;