import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import NavigationBar from '../../Shared/NavigationBar'
import AllDeperMennts from '../Components/AllDeperMennts';
import useNotice from '../Hooks/useNotice';

const CseDetails = () => {
    const [noticeInformation] = useNotice();
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='m-3' style={{ paddingTop: 107 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3 col-lg-3">
                            <AllDeperMennts></AllDeperMennts>
                        </div>
                        <div className="col-12 col-md-9 col-lg-9">
                            <div className='noticeBoardB py-4'>
                                <h3 style={{ color: '#fff', padding: '5px 10px', backgroundColor: '#263238', borderRadius: '3px' }}><img alt='' src='https://www.dhakacitycollege.edu.bd/images/cse.png' width='30' /> DEPARTMENT OF 	ACCOUNTING</h3>
                                <div class='articalhead mb-3'>
                                    <img src='https://www.dhakacitycollege.edu.bd/images/notice.png' alt='' width='30' /> NOTICE BOARD (DEPARTMENT OF 	ACCOUNTING)
                                </div>
                                <div className="all-notice ">
                                    <div className='m-3 notice-link'>
                                        <table class="table table-bordered table-hover border-success">
                                            <tbody>
                                                {
                                                    noticeInformation?.map(data => <tr>
                                                        <td style={{ color: 'brown' }}>{data.date}</td>
                                                        <td><Link to={`/Notice/${data.id}`}>{data.name}</Link></td>
                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <button className='btn allNotice'>See All Notice</button>
                                </div>
                            </div>
                            <div className='pt-4'>
                                <div class='artical'>
                                    <div class='articalhead'>
                                        ১ম বর্ষ স্নাতক (সম্মান) শ্রেণিতে ভর্তি
                                    </div>
                                    <div class='articaldetails'>

                                        <h5>২০১৯-২০২০ শিক্ষাবর্ষে ১ম বর্ষ স্নাতক (সম্মান) শ্রেণিতে ভর্তি বিজ্ঞপ্তি</h5>
                                        <h5>কেবল ছাত্রীদের জন্য</h5>

                                        ঢাকা সিটি কলেজে ১ম বর্ষ স্নাতক (সম্মান) বাংলা, ইংরেজি, অর্থনীতি, হিসাববিজ্ঞান, ব্যবস্থাপনা, মার্কেটিং, এবং ফিন্যান্স এন্ড ব্যাংকিং বিষয়ে ভর্তির জন্য online -এ কেবল ছাত্রীরা আবেদন করতে পারবে। এজন্য সংশ্লিষ্ট আবেদনকারীকে ০১.০৯.২০১৯ তারিখ বিকাল ০৪:০০টা থেকে ১৫.০৯.২০১৯ তারিখ রাত ১২:০০টার মধ্যে অনলাইনে ভর্তি কার্যক্রমে প্রাথমিক আবেদন ফরম পূরণের জন্যে জাতীয় বিশ্ববিদ্যালয়ের ভর্তি বিষয়ক ওয়েবসাইট (<a href='http://www.nu.ac.bd/admissions/' target='_blank'> www.nu.ac.bd/admissions</a>)-এর Honours অপশনে গিয়ে Honours Admission User Guide লিংকে ক্লিক করতে হবে এবং আবেদন ফরম পূরণ করতে হবে। আবেদন ফরমে প্রার্থীর পাসপোর্ট আকারের সম্প্রতি তোলা রঙিন ছবি স্ক্যান করে upload করতে হবে (ছবির মাপ 120 x 150  pixels, Image Type : jpg Ges maximum file size : 50 Kb) এবং প্রাথমিক আবেদন ফরমের প্রিন্ট আউট নিতে হবে [A-4 (8.5" x 11") সাইজের সাদা অফসেট কাগজে]। প্রিন্ট আউটকৃত আবেদনপত্রটি ০২.০৯.২০১৯ থেকে ১৬.০৯.২০১৯ তারিখের মধ্যে এস.এস.সি, এইচ.এস.সি / সমমান পরীক্ষার নম্বরপত্র ও রেজিস্ট্রেশন কার্ড-এর সত্যায়িত ফটোকপি ও প্রাথমিক আবেদন ফি বাবদ ২৫০/= (দুইশত পঞ্চাশ) টাকা কলেজ অফিসে (ছুটির দিন ছাড়া সকাল ৯:০০টা থেকে বিকেল ৫:০০টার মধ্যে) জমা দিতে হবে।
                                        <h5>আবেদনের সাধারণ যোগ্যতা :</h5>
                                        ক)	বাংলাদেশে স্বীকৃত যে কোন শিক্ষা বোর্ড/ উন্মুক্ত বিশ্ববিদ্যালয়ের মানবিক শাখা থেকে ২০১৬/২০১৭ সালের SSC ও সমমান পরীক্ষায় ন্যূনতম জিপিএ ২.৫ এবং ২০১৮/২০১৯ সালের HSC ও সমমান পরীক্ষায় ৪র্থ বিষয়সহ ন্যূনতম জিপিএ ২.৫ প্রাপ্ত ছাত্রীরা আবেদন করতে পারবে।
                                        খ)	বাংলাদেশে স্বীকৃত যে কোন শিক্ষা বোর্ড/ উন্মুক্ত বিশ্ববিদ্যালয়ের বিজ্ঞান ও ব্যবসায় শিক্ষা শাখা থেকে ২০১৬/২০১৭ সালের SSC ও সমমান পরীক্ষায় ন্যূনতম জিপিএ ৩.০ এবং ২০১৮/২০১৯ সালের HSC ও সমমান পরীক্ষায় ৪র্থ বিষয়সহ ন্যূনতম জিপিএ ২.৫ প্রাপ্ত ছাত্রীরা আবেদন করতে পারবে।
                                        গ)	বাংলাদেশ কারিগরি শিক্ষা বোর্ড থেকে শুধুমাত্র i) এইচ.এস.সি. (ভোকেশনাল) ii) এইচ.এস.সি. (বিজনেস ম্যানেজমেন্ট) iii) ডিপ্লোমা-ইন-কমার্স পরীক্ষায় উত্তীর্ণ প্রার্থীরা ১ এর খ নং শর্তপূরণ সাপেক্ষে আবেদন করতে পারবে।
                                        ঘ)	প্রার্থীদের উচ্চ মাধ্যমিক ও সমমান পরীক্ষায় পঠিত বিষয়সমূহ থেকে ভর্তিযোগ্য (Eligible) বিষয় নির্ধারণ করা হবে। উক্ত পঠিত বিষয়ে (২০০ নম্বরের) ন্যূনতম গ্রেড পয়েন্ট ৩.০ থাকতে হবে।
                                        ঙ)	২০১৬/২০১৭ সালের ঙ-খবাবষ পরীক্ষায় তিনটি বিষয়ে ‘বি’ গ্রেডসহ অন্তত ০৪ (চার) টি বিষয়ে উত্তীর্ণ এবং ২০১৮/২০১৯ সালের A-Level পরীক্ষায় একটি বিষয়ে ‘বি’ গ্রেডসহ অন্তত ০২ (দুই)টি বিষয়ে উত্তীর্ণ প্রার্থীরা শর্তপূরণ সাপেক্ষে আবেদন করতে পারবে।
                                        ভর্তি সংক্রান্ত অন্যান্য তথ্যাদি কলেজ অফিস থেকে জানা যাবে। কলেজ থেকে online -এ আবেদন ফরম পূরণের বিশেষ ব্যবস্থা আছে।
                                        <h5>ক্লাস শুরুর তারিখ :  ০১ অক্টোবর,  ২০১৯।</h5>

                                    </div>
                                    <div class='artical mt-3'>
                                        <div class='articalhead'>
                                            <h3 style={{ color: '#fff', padding: '10px', backgroundColor: '#263238', borderRadius: '3px' }}><img src='images/facultyimg.png' alt='' width='30' /> DEPARTMENT HEAD (DEPARTMENT OF 	BANGLA)

                                            </h3>
                                        </div>
                                        <div class='articaldetails'>


                                            <img id="blah" alt='' src="https://dotcom.vip/dcc/ap/upload/scan0002.jpg" width="150px" style={{ padding: '10px' }} />
                                            <h5>Ms Atia Ferdous</h5>
                                            <h6>Head, Department. of Bangla</h6>
                                            <h6>DHAKA CITY COLLEGE</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class='artical'>
                                    <div class='articalhead'>
                                        About Department of CSE
                                    </div>
                                    <div class='articaldetails'>
                                        Today’s Dhaka City College, one of the most recognized colleges of Bangladesh was established in 1957 under the patronage of some educationists and patriotic social workers. At the initial stage the classes of the college were held at West End High School and thereafter at Dhaka College. In 1970 the college was shifted to Dhanmondi Road No. 2 at its own premises.
                                        <br /><br />
                                        In order to cater to the growing demand of time, the college authority took a timely step by introducing 4 year-B.Sc. (Hons) Course in Computer Science under National University in this college from the session 1998-’99 and 4 year-B.Sc. (Hons) Professional course in Computer Science & Engineering (CSE) under National University from the session 2006-’07. In the context of modern scientific and technological advancement the role of trained-up human resource, particularly in Computer Science and Engineering is an undeniable fact. From this point of view the introduction of (Hons) Professional course in this subject is a noble step and it will definitely play a vital role in the advancement of the college. We believe that this noble venture will go a long way in materializing our mission making this college ‘A CENTRE OF EXCELLENCE’.

                                        <div class='imgdiv'>
                                            <img alt='' src='https://www.dhakacitycollege.edu.bd/images/cse/cse1.png' />
                                            <br />Dhaka City College
                                        </div>

                                    </div>
                                </div>

                                <div class='artical'>
                                    <div class='articalhead'>
                                        Why Study Computer Science and Engineering
                                    </div>
                                    <div class='articaldetails'>
                                        The most important aspect of Computer Science and Engineering (CSE) is problem solving, an essential skill for life. Students study the design, development and analysis of software and hardware used to solve problems in a variety of business, scientific and social contexts. <br /><br />

                                        Computer Science and Engineering jobs are among the highest paid and have the highest job satisfaction. Computer Science and Engineering is very often associated with innovation, and developments the ultra modern society. <br /><br />

                                        Computer technology are part of just about everything that touches our lives.<br />

                                        <br />

                                    </div>
                                </div>

                                <div class='artical'>
                                    <div class='articalhead'>
                                        Why Study CSE in Dhaka City College
                                    </div>
                                    <div class='articaldetails'>
                                        One of the objectives of an educational institution is to provide the nation with educated and skilled manpower and thereby contribute to the overall development of the country. With this end in view, Dhaka City College has been making continuous effort with a group of qualified teachers under a competent administration. In the field of Higher Secondary Education and Bachelors Degree under National University the college has already brought itself onto the frontline. <br /><br />


                                        <div class='imgdiv'>
                                            <img alt='' src='https://www.dhakacitycollege.edu.bd/images/cse/cse2.jpg' />
                                            <br />Department of CSE
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                                <div class='artical'>
                                    <div class='articalhead'>
                                        Semester Wise Tuition Fee Distribution
                                    </div>
                                    <div class='articaldetails'>
                                        <h5>Tuition Fee Excluding Practical Examination, Registration and form fill-up fees. </h5>
                                        <div class='imgdiv'>


                                            <table className='border-dark table-bordered table-striped table' cellspacing='0' width='100%'>
                                                <tbody>
                                                    <tr>
                                                        <td width="128">
                                                            <p><strong>Year</strong></p>
                                                        </td>
                                                        <td width="84">
                                                            <p><strong>Semester</strong></p>
                                                        </td>
                                                        <td width="198">
                                                            <p><strong>Tuition Fees</strong></p>
                                                        </td>
                                                        <td width="132">
                                                            <p><strong>Amount in Tk.</strong></p>
                                                        </td>
                                                        <td width="97">
                                                            <p><strong>Total Tk.</strong></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="2" width="128">
                                                            <p>1<sup>st</sup></p>
                                                        </td>
                                                        <td width="84">
                                                            <p>1<sup>st</sup></p>
                                                        </td>
                                                        <td width="198">
                                                            <p>Admission Fee &amp; other charges</p>
                                                            <p>Course Fee</p>
                                                        </td>
                                                        <td width="132">
                                                            <p>20,250</p>
                                                            <p>16,750</p>
                                                        </td>
                                                        <td rowspan="8" width="97">
                                                            <p><strong>2,20,000</strong></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="84">
                                                            <p>2<sup>nd</sup></p>
                                                        </td>
                                                        <td width="198">
                                                            <p>Course Fee</p>
                                                        </td>
                                                        <td width="132">
                                                            <p>16,750</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="2" width="128">
                                                            <p>2<sup>nd</sup></p>
                                                        </td>
                                                        <td width="84">
                                                            <p>3<sup>rd</sup></p>
                                                        </td>
                                                        <td width="198">
                                                            <p>Admission Fee &amp; other charges</p>
                                                            <p>Course Fee</p>
                                                        </td>
                                                        <td width="132">
                                                            <p>19,350</p>
                                                            <p>16,750</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="84">
                                                            <p>4<sup>th</sup></p>
                                                        </td>
                                                        <td width="198">
                                                            <p>Course Fee</p>
                                                        </td>
                                                        <td width="132">
                                                            <p>16,750</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="2" width="128">
                                                            <p>3<sup>rd</sup></p>
                                                        </td>
                                                        <td width="84">
                                                            <p>5<sup>th</sup></p>
                                                        </td>
                                                        <td width="198">
                                                            <p>Admission Fee &amp; other charges</p>
                                                            <p>Course Fee</p>
                                                        </td>
                                                        <td width="132">
                                                            <p>19,350</p>
                                                            <p>16,750</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="84">
                                                            <p>6<sup>th</sup></p>
                                                        </td>
                                                        <td width="198">
                                                            <p>Course Fee</p>
                                                        </td>
                                                        <td width="132">
                                                            <p>16,750</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="2" width="128">
                                                            <p>4<sup>th</sup></p>
                                                        </td>
                                                        <td width="84">
                                                            <p>7<sup>th</sup></p>
                                                        </td>
                                                        <td width="198">
                                                            <p>Admission Fee &amp; other charges</p>
                                                            <p>Course Fee</p>
                                                        </td>
                                                        <td width="132">
                                                            <p>19,350</p>
                                                            <p>16,750</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="84">
                                                            <p>8<sup>th</sup></p>
                                                        </td>
                                                        <td width="198">
                                                            <p>Course Fee</p>
                                                            <p>Project defense fee</p>
                                                            <p>Computer Lab &amp; Seminar Fee</p>
                                                        </td>
                                                        <td width="132">
                                                            <p>16,750</p>
                                                            <p>2,400</p>
                                                            <p>5,300</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>



                                        </div>
                                    </div>
                                </div>
                                <div class='artical'>
                                    <div class='articalhead'>
                                        LOCATION OF CSE DEPARTMENT
                                    </div>
                                    <div class='articaldetails'>

                                        <div class='imgdiv'>
                                            <img alt='' src='https://www.dhakacitycollege.edu.bd/images/3rdFloor.png' />
                                            <br />Department of CSE</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default CseDetails;