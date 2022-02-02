import React from 'react';
import Footer from '../../../Shared/Footer';
import NavigationBar from '../../../Shared/NavigationBar';

const Signup = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <section style={{ paddingTop: 107 }} id="features">
                <div class="container">
                    <div class="row">

                        <div class="col-sm-12 wow fadeInLeft mt-4" style={{ background: '#fff' }}>
                            <h3 style={{ color: '#3F51B5', padding: '10px', backgroundColor: '#DCEDC8', borderRadius: '3px' }}>Online Registration Form </h3>


                            <div style={{ textAlign: 'justify', fontSize: '15px', color: '#000', padding: '10px', backgroundColor: '#F1F8E9', borderRadius: '3px' }} class='signUpBG1'>
                                Already Signed Up? Click  <a href='index.php?request=signin'> Login </a> to login your account.

                                <hr />
                                <form name="myForm" className='signup' action="index.php?request=signupVali" onsubmit="return validateForm()" method="post" enctype="multipart/form-data">
                                    <div className="table-responsive">
                                        <table class="table " >

                                            <tr><td><h4 style={{ color: 'green' }}>SSC and HSC Information</h4>	</td><td>	</td><td></td><td></td></tr>

                                            <tr>

                                                <td>
                                                    <select name="SSCgroup" required class="smoothborderSelect" >
                                                        <option value="" selected>Select SSC Group</option>
                                                        <option value="Science">Science</option>
                                                        <option value="Business Studies">Business Studies</option>
                                                        <option value="Humanities">Humanities</option>
                                                    </select>

                                                </td>



                                                <td>

                                                    <input type="text" placeholder="Educational Institute Name" class="smoothborder" required name="sscschool" />
                                                </td>

                                                <td>

                                                    <input type="text" placeholder="SSC GPA (চতুর্থ বিষয় ছাড়া)" class="smoothborder" required name="SscGpaWithoutfs" />


                                                </td>
                                                <td>
                                                    <input type="text" placeholder="SSC Roll No." class="smoothborder" required name="sscRollNo" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>

                                                    <select name="SSCboard" required class="smoothborderSelect" >
                                                        <option value="" selected>Select SSC Board</option>
                                                        <option value="barisal">Barisal</option>
                                                        <option value="chittagong">Chittagong</option>
                                                        <option value="comilla">Comilla</option>
                                                        <option value="dhaka">Dhaka</option>
                                                        <option value="dinajpur">Dinajpur</option>
                                                        <option value="jessore">Jessore</option>
                                                        <option value="mymensingh">Mymensingh</option>
                                                        <option value="rajshahi">Rajshahi</option>
                                                        <option value="sylhet">Sylhet</option>
                                                        <option value="madrasah">Madrasah</option>
                                                        <option value="tec">Technical</option>
                                                        <option value="dibs">DIBS(Dhaka)</option>
                                                        <option value="BOU">BOU(Bangladesh Open University)</option>
                                                    </select>


                                                </td>

                                                <td>
                                                    <select name="sscYear" required class="smoothborderSelect">
                                                        <option value="">Select SSC Year</option>
                                                        <option value='2022'>2022</option>
                                                        <option value='2021'>2021</option><option value='2020'>2020</option>
                                                        <option value='2019'>2019</option>
                                                        <option value='2018'>2018</option>
                                                        <option value='2017'>2017</option>
                                                        <option value='2016'>2016</option>
                                                        <option value='2015'>2015</option>
                                                        <option value='2014'>2014</option>
                                                        <option value='2013'>2013</option>
                                                        <option value='2012'>2012</option>
                                                        <option value='2011'>2011</option>
                                                        <option value='2010'>2010</option>
                                                        <option value='2009'>2009</option>
                                                        <option value='2008'>2008</option>
                                                        <option value='2007'>2007</option>
                                                        <option value='2006'>2006</option>
                                                        <option value='2005'>2005</option>
                                                        <option value='2004'>2004</option>
                                                        <option value='2003'>2003</option>
                                                        <option value='2002'>2002</option>
                                                        <option value='2001'>2001</option>
                                                        <option value='2000'>2000</option>
                                                    </select>

                                                </td>

                                                <td>

                                                    <input type="text" placeholder="SSC GPA (চতুর্থ বিষয়সহ)" class="smoothborder" required name="SscGpa" />

                                                </td>

                                                <td>
                                                    <input type="text" placeholder="SSC Registration No." class="smoothborder" required name="SscRegNo" />
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    <select name="HSCboard" required class="smoothborderSelect" >
                                                        <option value="" selected>Select HSC Board</option>
                                                        <option value="barisal">Barisal</option>
                                                        <option value="chittagong">Chittagong</option>
                                                        <option value="comilla">Comilla</option>
                                                        <option value="dhaka">Dhaka</option>
                                                        <option value="dinajpur">Dinajpur</option>
                                                        <option value="jessore">Jessore</option>
                                                        <option value="rajshahi">Rajshahi</option>
                                                        <option value="sylhet">Sylhet</option>
                                                        <option value="mymensingh">Mymensingh</option>
                                                        <option value="madrasah">Madrasah</option>
                                                        <option value="tec">Technical</option>
                                                        <option value="dibs">DIBS(Dhaka)</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="hscYear" required class="smoothborderSelect">
                                                        <option value="">HSC Passing Year</option>
                                                        <option value='2022'>2022</option>
                                                        <option value='2021'>2021</option>
                                                        <option value='2020'>2020</option>
                                                        <option value='2019'>2019</option>
                                                        <option value='2018'>2018</option>
                                                        <option value='2017'>2017</option>
                                                        <option value='2016'>2016</option>
                                                        <option value='2015'>2015</option>
                                                        <option value='2014'>2014</option>
                                                        <option value='2013'>2013</option>
                                                        <option value='2012'>2012</option>
                                                        <option value='2011'>2011</option>
                                                        <option value='2010'>2010</option>
                                                        <option value='2009'>2009</option>
                                                        <option value='2008'>2008</option>
                                                        <option value='2007'>2007</option>
                                                        <option value='2006'>2006</option>
                                                        <option value='2005'>2005</option>
                                                        <option value='2004'>2004</option>
                                                        <option value='2003'>2003</option>
                                                        <option value='2002'>2002</option>
                                                        <option value='2001'>2001</option>
                                                        <option value='2000'>2000</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="HSC GPA" class="smoothborder" required name="HscGpa" />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="HSC Roll No" class="smoothborder" required name="HscRollNo" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>

                                                    <select name="religion" required class="smoothborderSelect">
                                                        <option value="BUDDHISM">Religion</option>
                                                        <option value="ISLAM">ISLAM</option>
                                                        <option value="BUDDHISM">BUDDHISM</option>
                                                        <option value="CHRISTIANITY">CHRISTIANITY</option>
                                                        <option value="HINDUISM">HINDUISM</option>
                                                        <option value="JAINISM">JAINISM</option>
                                                        <option value="JUDAISM">JUDAISM</option>
                                                        <option value="OTHERS">OTHERS</option>
                                                        <option value="SIKHISM">SIKHISM</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="homedistrict" required class="smoothborderSelect">
                                                        <option value="BAGERHAT">Home District </option>
                                                        <option value="BAGERHAT">BAGERHAT</option>
                                                        <option value="BANDARBAN">BANDARBAN</option>
                                                        <option value="BARGUNA">BARGUNA</option>
                                                        <option value="BARISAL">BARISAL</option>
                                                        <option value="BHOLA">BHOLA</option>
                                                        <option value="BOGRA">BOGRA</option>
                                                        <option value="BRAHMANBARIA">BRAHMANBARIA</option>
                                                        <option value="CHANDPUR">CHANDPUR</option>
                                                        <option value="CHAPAINAWABGANJ">CHAPAINAWABGANJ</option>
                                                        <option value="CHITTAGONG">CHITTAGONG</option>
                                                        <option value="CHUADANGA">CHUADANGA</option>
                                                        <option value="COMILLA">COMILLA</option>
                                                        <option value="COXS BAZAR">COXS BAZAR</option>
                                                        <option value="DHAKA">DHAKA</option>
                                                        <option value="DINAJPUR">DINAJPUR</option>
                                                        <option value="FARIDPUR">FARIDPUR</option>
                                                        <option value="FENI">FENI</option>
                                                        <option value="GAIBANDHA">GAIBANDHA</option>
                                                        <option value="GAZIPUR">GAZIPUR</option>
                                                        <option value="GOPALGANJ">GOPALGANJ</option>
                                                        <option value="HABIGANJ">HABIGANJ</option>
                                                        <option value="JAMALPUR">JAMALPUR</option>
                                                        <option value="JESSORE">JESSORE</option>
                                                        <option value="JHALAKATI">JHALAKATI</option>
                                                        <option value="JHENAIDAH">JHENAIDAH</option>
                                                        <option value="JOYPURHAT">JOYPURHAT</option>
                                                        <option value="KHAGRACHHARI">KHAGRACHHARI</option>
                                                        <option value="KHULNA">KHULNA</option>
                                                        <option value="KISHOREGANJ">KISHOREGANJ</option>
                                                        <option value="KURIGRAM">KURIGRAM</option>
                                                        <option value="KUSHTIA">KUSHTIA</option>
                                                        <option value="LAKSHMIPUR">LAKSHMIPUR</option>
                                                        <option value="LALMONIRHAT">LALMONIRHAT</option>
                                                        <option value="MADARIPUR">MADARIPUR</option>
                                                        <option value="MAGURA">MAGURA</option>
                                                        <option value="MANIKGANJ">MANIKGANJ</option>
                                                        <option value="MEHERPUR">MEHERPUR</option>
                                                        <option value="MOULVIBAZAR">MOULVIBAZAR</option>
                                                        <option value="MUNSHIGANJ">MUNSHIGANJ</option>
                                                        <option value="MYMENSINGH">MYMENSINGH</option>
                                                        <option value="NAOGAON">NAOGAON</option>
                                                        <option value="NARAIL">NARAIL</option>
                                                        <option value="NARAYANGANJ">NARAYANGANJ</option>
                                                        <option value="NARSINGDI">NARSINGDI</option>
                                                        <option value="NATORE">NATORE</option>
                                                        <option value="NETROKONA">NETROKONA</option>
                                                        <option value="NILPHAMARI">NILPHAMARI</option>
                                                        <option value="NOAKHALI">NOAKHALI</option>
                                                        <option value="PABNA">PABNA</option>
                                                        <option value="PANCHAGARH">PANCHAGARH</option>
                                                        <option value="PATUAKHALI">PATUAKHALI</option>
                                                        <option value="PIROJPUR">PIROJPUR</option>
                                                        <option value="RAJBARI">RAJBARI</option>
                                                        <option value="RAJSHAHI">RAJSHAHI</option>
                                                        <option value="RANGAMATI">RANGAMATI</option>
                                                        <option value="RANGPUR">RANGPUR</option>
                                                        <option value="SATKHIRA">SATKHIRA</option>
                                                        <option value="SHARIATPUR">SHARIATPUR</option>
                                                        <option value="SHERPUR">SHERPUR</option>
                                                        <option value="SIRAJGANJ">SIRAJGANJ</option>
                                                        <option value="SUNAMGANJ">SUNAMGANJ</option>
                                                        <option value="SYLHET">SYLHET</option>
                                                        <option value="TANGAIL">TANGAIL</option>
                                                        <option value="THAKURGAON">THAKURGAON</option>

                                                    </select>

                                                </td>
                                                <td>

                                                    <select name="hscgroup" required class="smoothborderSelect">
                                                        <option value="">HSC Group</option>
                                                        <option value="Science">Science</option>
                                                        <option value="Business Studies">Business Studies</option>
                                                        <option value="Humanities">Humanities</option>
                                                        <option value="None">None</option>
                                                    </select>
                                                </td>
                                                <td>

                                                </td>
                                            </tr>



                                            <tr><td><h4 style={{ color: 'brown' }}>Student Information</h4>	</td><td>	</td><td></td><td></td></tr>

                                            <tr>
                                                <td>
                                                    <label>ID Number<br />[As Like as Payment Slip]</label>
                                                </td><td>
                                                    <input type="text" placeholder="ID No." class="smoothborder" required name="idno" />
                                                </td>
                                                <td>
                                                    <label>Class Roll No.<br />[As Like as Payment Slip]</label>
                                                </td><td>
                                                    <input type="text" placeholder="Roll No." class="smoothborder" name="stdRollNo" required />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <label>Student Name</label>
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Student Name" class="smoothborder" required name="studentsName" />
                                                </td>
                                                <td>

                                                    <label>Date of Birth<br />(এস.এস.সি/সমমান পরীক্ষার<br />সার্টিফিকেট অনুযায়ী)</label>
                                                </td>
                                                <td>
                                                    <input type="date" placeholder="Example: 25-12-2015" class="smoothborder" name="dateofbirth" required />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <label>Student Mobile Number<br /> (নিজের ব্যবহৃত অ্যাকটিভ নম্বর)</label>
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Example: 01735558228" class="smoothborder" name="smobile" required />
                                                </td>
                                                <td>
                                                    <label>Hons Registration No.(for Hons admission)<br />SMS-এর মাধ্যমে প্রাপ্ত Security Code(for HSC)</label>
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Optional" class="smoothborder" name="stdCodeNo" />
                                                </td>
                                            </tr>


                                            <tr><td>
                                                <label>Mother's Name</label>
                                            </td><td>
                                                    <input type="text" placeholder="Mother's Name" class="smoothborder" name="mothersName" required />
                                                </td><td>
                                                    <label>Mother's Occupation</label>
                                                </td><td>
                                                    <input type="text" placeholder="Mother's Occupation" class="smoothborder" name="mothersOccupation" required />
                                                </td></tr>


                                            <tr><td>
                                                <label>Father's Name</label>
                                            </td><td>
                                                    <input type="text" placeholder="Father's Name" class="smoothborder" name="fathersName" required />
                                                </td><td>
                                                    <label>Father's Occupation</label>
                                                </td><td>
                                                    <input type="text" placeholder="Father's Occupation " class="smoothborder" name="fathersOccupation" required />
                                                </td></tr>

                                            <tr><td>
                                                <label>Father's Yearly Income</label>
                                            </td><td>
                                                    <input type="text" placeholder="Father's Yearly Income" class="smoothborder" name="fathersIncome" required />
                                                </td><td>
                                                    <label>Mother's Mobile Number </label>
                                                </td><td>
                                                    <input type="text" placeholder="Example: 01735558228" class="smoothborder" name="mmobile" />
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <label>E-mail ID<h6>[Important for Password Recovery]</h6></label>
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="E-mail ID" class="smoothborder" name="emailid" required />
                                                </td><td>
                                                    <label>Father's Mobile Number</label>
                                                </td><td>
                                                    <input type="text" placeholder="Father's Mobile No." class="smoothborder" name="gmobile" required />
                                                </td></tr>
                                        </table>
                                    </div>

                                    <div className="table-responsive">
                                        <table class="table " >
                                            <tr>
                                                <td>
                                                    <h6>Permanent Address</h6>
                                                    <input type="text" placeholder="Permanent Address" class="smoothborder1" name="peraddress" required />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6>Present Address</h6>
                                                    <input type="text" placeholder="Present Address" class="smoothborder1" name="preaddress" required />
                                                </td>
                                            </tr>



                                            <tr>
                                                <td>
                                                    <h6>Legal Guardian [আইনানুগ অভিভাবকের (পিতা জীবিত না থাকলে) নাম, পেশা ও পদবি, টেলিফোন নম্বর, পূর্ণ ঠিকানা]</h6>
                                                    <input type="text" placeholder="Legal Guardian Name, Occupation and Designation, Mobile No., Full Present Address" class="smoothborder1" name="legalguardian" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6>Local Guardian [স্থানীয় অভিভাবকের (পিতা বা মাতা ঢাকায় বসবাস না করলে) নাম, পেশা ও পদবি, টেলিফোন নম্বর, পূর্ণ ঠিকানা]</h6>
                                                    <input type="text" placeholder="Local Guardian Name, Occupation and Designation, Mobile No., Full Present Address" class="smoothborder1" name="localguardian" />
                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                    <div className="table-responsive">
                                        <table class="table " >


                                            <tr>
                                                <td>
                                                    <label>Password</label>
                                                </td>
                                                <td>
                                                    <input type="password" placeholder="Minimum 6 Characters" class="smoothborder" name="passwordini" required />
                                                </td>
                                                <td>
                                                    <label>Confirm Password</label>
                                                </td>
                                                <td>
                                                    <input type="password" placeholder="Confirm Password" class="smoothborder" name="passwordcon" required />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <label>
                                                        <h6 style={{ color: 'red' }}>** It's very important **</h6>
                                                        Student Must Provide Recently<br /> Taken Passport  Size Official Image<br />
                                                        <h5 style={{ color: 'brown' }}>Maximum Photo File Size: 15 KB <br />and Image Dimension Size, <br /> Width: 120 pixel, Height: 150 pixel.</h5>
                                                        <h5>This image will be sent to<br /> education board for <br />your HSC registration</h5><br /><br />

                                                    </label>
                                                </td><td>
                                                    <input type="file" placeholder="Student Cell No" class="smoothborder " name="productImage" size="50px" onchange="readURL(this);" /><br />

                                                    <div style={{ width: '125px', height: '190px', backgroundColor: '#fff', padding: '3px', borderRadius: '2px' }}>
                                                        <img id="blah" src="images/default.png" height="190px" width="152px" alt='' />
                                                    </div>

                                                </td>
                                                <td> <h6 style={{ color: 'green' }}>Captcha Code</h6>

                                                    <span class="prefix" style={{ textAlign: 'left', height: '38px', backgroundColor: '#eee' }}>

                                                        <img width="80" src="/captcha/simple-php-captcha.php?_CAPTCHA&amp;t=0.55950300+1641635069" alt="CAPTCHA code" /></span>
                                                </td>
                                                <td>	<h6 style={{ color: 'green' }}>Type Captcha Code</h6>
                                                    <input type="text" placeholder="Type Text As Left Image" class="smoothborder" name="captcha_val" required />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>Nationality</label>
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="Type Text as Left Image" class="smoothborder" value='Bangladeshi' name="nationality" />
                                                </td><td>
                                                    <label>Save and Go to Next Step</label>
                                                </td>
                                                <td>
                                                    <input type="submit" name="submit" value="Submit" class="btn btn-primary btn-large" style={{ width: '100%', height: '50px' }} />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Signup;