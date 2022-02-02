import React from 'react';
import Footer from '../../Shared/Footer';
import NavigationBar from '../../Shared/NavigationBar';
import Marqueee from '../Home/TopNoticeBoard/Marqueee'
import GoogleMap from './GoogleMap';
import PhoneNumber from './PhoneNumber';

const Contact = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='m-3' style={{ paddingTop: 107 }}>
                <div className="container">
                    <div >
                        <Marqueee></Marqueee>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-12" style={{ backgroundColor: "#fff" }}>
                            <h3
                                style={{ color: '#3F51B5', padding: '10px', fontWeight: 'bold', backgroundColor: '#DCEDC8', borderRadius: '3px' }}>
                                <i class="fa fa-umbrella">
                                </i> আমাদের সাথে সরাসরি যোগাযোগ করুন
                            </h3>
                            <div style={{ textAlign: 'justify', fontSize: '15px', color: '#000', padding: '10px', backgroundColor: '#F1F8E9', borderRadius: '3px' }} class='signUpBG1 '>
                                <hr />
                                <form action="/" method="post">
                                    <table class='table table-bordered'>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <i class="fas fa-users"></i>
                                                </td
                                                ><td>ব্যবহারকারীর ধরণ </td>
                                                <td>
                                                    <select name="user-type-forex" class="form-control inText"  >
                                                        <option value=""> ব্যবহারকারীর ধরণ নির্বাচণ করুন  </option>
                                                        <option value="অভিভাবক"> অভিভাবক  </option>
                                                        <option value="শিক্ষার্থী "> শিক্ষার্থী </option>
                                                        <option value="অন্যান্য"> অন্যান্য</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i class="fas fa-user"></i>
                                                </td>
                                                <td>আপনার নাম </td>
                                                <td>
                                                    <input class="form-control inText" type="text" placeholder="" name="name-forex" required />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i class="fas fa-envelope"></i>
                                                </td>
                                                <td>আপনার ইমেইল আইডি(Email ID)  </td>
                                                <td>
                                                    <input class="form-control inText" type="text" placeholder="" name="email" required />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i class="fas fa-mobile"></i></td><td>Mobile No.  </td>
                                                <td>
                                                    <input class="form-control inText" type="text" placeholder="" name="mobileno" required />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i class="fas fa-comment-dots"></i>
                                                </td>
                                                <td>আপনার বার্তা </td>
                                                <td><textarea placeholder="" class="form-control" rows="4" name="message-forex" required  ></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i class="fab fa-ioxhost"></i>
                                                </td>
                                                <td>
                                                    <div style={{ float: 'left', margin: '0px 0 0px 0' }}>
                                                        <span style={{ padding: '6px', borderRadius: '2px 0 0 2px ', fontSize: '20px' }}>ক্যাপচা = </span>
                                                        <span style={{ padding: '6px', borderRadius: '0 2px 2px 0 ', fontSize: '20px', color: 'brown' }}> n4R3 </span>

                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="text" name="captcha" id="captcha" placeholder='বাম পাশের লেখাটি টাইপ করুন' class="form-control inText" style={{ width: '100%' }} required="required" /> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                </td>
                                                <td>
                                                    <input name="submit" class="btn btn-danger" type="submit" value="Send Message" />
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4 col-12" style={{ backgroundColor: '#fff' }}>
                            <h3 style={{ color: '#3F51B5', padding: '10px', background: '#BBDEFB', borderRadius: '3px' }}>Contact Information  </h3>
                            <div id="leftcolumn" style={{
                                textAlign: 'justify',
                                fontSize: '15px',
                                color: '#000',
                                padding: '10px',
                                backgroundColor: '#E3F2FD',
                                borderRadius: '3px'
                            }}>
                                <p align="justify" style={{ fontSize: '16px' }}>
                                    <div class="footer-box-text footer-box-text-contact">
                                        <p><i class="fa fa-map-marker"></i> Address:
                                            Road No. 02, Dhanmondi R/A, Dhaka: 1205, Bangladesh.</p>
                                        <p><i class="fa fa-phone"></i> Phone:
                                            +88-02-58610294 </p>
                                        <p><i class="fa fa-fax"></i> Fax:
                                            +88-02-9675529 </p>
                                        <p><i class="fa fa-envelope"></i> Email:
                                            dhakacitycollege1250@gmail.com</p>
                                    </div>
                                </p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.216377487616!2d90.38051881506607!3d23.73966218459471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7db3123bb%3A0x33f738dc3ddbe79f!2sDhaka+City+College!5e0!3m2!1sen!2sbd!4v1517767338067"
                                    title='loaction' width="100%" height="300" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <PhoneNumber></PhoneNumber>
                    <GoogleMap></GoogleMap>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;