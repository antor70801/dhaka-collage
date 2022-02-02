import React from 'react';
import Footer from '../../../Shared/Footer';
import NavigationBar from '../../../Shared/NavigationBar';
import BKash from '../../Home/TopNoticeBoard/BKash';
import CovidNotice from '../../Home/TopNoticeBoard/CovidNotice';
import HonsDeperment from '../../Home/TopNoticeBoard/HonsDeperment';

import SigninLinks from '../../Home/TopNoticeBoard/SigninLinks';

const Login = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <section style={{ paddingTop: 125 }} id="features">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 col-md-9 col-12" style={{ background: '#fff' }}>
                            <h3 style={{ color: '#3F51B5', padding: '10px', background: '#DCEDC8', borderRadius: '3px' }}><i class="fa fa-sign-in"></i> Sign in to your account</h3>
                            <div style={{ textAlign: 'justify', fontSize: '15px', color: '#000', padding: '10px', backgroundColor: '#F1F8E9', borderRadius: '3px' }} class='signUpBG1'>
                                Don't Have Account? Click <a href='index.php?request=signup'> Sign Up </a> to registration.

                                <form action="index.php?request=loginVali&type=13&link=76" method="post">
                                    <table class='table  table-hover border-lighr table-bordered'>
                                        <tbody>


                                            <tr>
                                                <td>
                                                    <i class="fa fa-envelope-o"></i>
                                                </td>
                                                <td className='border-end'>ID NO. </td>
                                                <td>
                                                    <input type="text" name="emailID" id="email" required="required" class="form-control inText" />
                                                </td>
                                            </tr>
                                            {/*   <td>
                                            <i class="fa fa-star">
                                            </i>
                                        </td>
                                        <td>Mobile No.<br /><span style={{ color: 'red', fontWeight: 'bold' }}>Example: 0173666XXXX</span> </td>
                                        <td>
                                            <input type="text" name="mobileno" id="password" required="required" class="form-control inText" placeholder='' />
                                        </td> */}
                                            <tr>
                                                <td>
                                                    <i class="fa fa-key"></i></td><td>Password / SSC Registration No.<br /><span style={{ color: 'red', fontWeight: 'bold' }}></span>
                                                </td>
                                                <td>
                                                    <input type="password" name="Password" id="password" required="required" class="form-control inText" placeholder='' />
                                                </td>
                                            </tr>
                                            {/* <td>
                                            <i class="fa fa-sun-o"></i></td><td>Session</td>
                                        <td>

                                            <select name="sessionID" required class="form-control inText">
                                                <option value="">Select Session</option>
                                                <option value="2021">2020-21</option><option value="1920">2019-20</option><option value="1819">2018-19</option><option value="1718">2017-18</option><option value="1617">2016-17</option><option value="1516">2015-16</option><option value="1415">2014-15</option>		</select>

                                        </td> */}
                                            <tr>
                                                <td>
                                                    <i class="fa fa-check"></i></td><td>Captcha 5+9=?</td> <td><input type="text" name="captcha_val" id="captcha" class="form-control inText" required="required" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td></td><td><input name="submit" class="btn btn-danger" type="submit" value="LOGIN" /> </td> <td> <a href="index.php?request=forgot-password">Forgot password?</a></td></tr>

                                        </tbody>
                                    </table>


                                </form >
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                            <SigninLinks></SigninLinks>
                            <BKash></BKash>
                            <HonsDeperment></HonsDeperment>
                            <CovidNotice></CovidNotice>
                        </div>
                    </div>

                </div>
            </section>
            <Footer></Footer>
        </div >
    );
};

export default Login;