import React from 'react';
import Footer from '../../Shared/Footer';
import NavigationBar from '../../Shared/NavigationBar';

const StudentResult = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='m-3' style={{ paddingTop: 107 }}>
                <div className="container">
                    <div className=''>
                        <div className=" ">
                            <div style={{ borderRadius: '15px' }} className="col-12 col-lg-8 col-md-8 mx-auto shadow">
                                <div className="m-3 pb-1 rounded">
                                    <h4 className='text-center fw-bold py-2'>Equivalent Result 2022</h4>
                                    <div className="table-responsive">
                                        <table style={{ backgroundColor: ' rgb(238, 238, 238)', border: 'white', color: 'black' }} class="table  table-bordered">

                                            <tbody>
                                                <tr>

                                                    <td>Roll No</td>
                                                    <td>514068</td>
                                                    <td>Name</td>
                                                    <td>JAHID HASAN Antor</td>
                                                </tr>
                                                <tr>

                                                    <td>Board</td>
                                                    <td>JESSORE</td>
                                                    <td>Father's Name</td>
                                                    <td>ABDUR RASHID</td>
                                                </tr>
                                                <tr>

                                                    <td>Group</td>
                                                    <td>BUSINESS STUDIES	</td>
                                                    <td>Mother's Name	</td>
                                                    <td>PAIRA KHATUN</td>
                                                </tr>
                                                <tr>

                                                    <td>Type</td>
                                                    <td>REGULAR</td>
                                                    <td>Date of Birth</td>
                                                    <td>25-12-1997</td>
                                                </tr>
                                                <tr>

                                                    <td>Result</td>
                                                    <td className='fw-bold'>PASSED</td>
                                                    <td>Institute</td>
                                                    <td>2KUMARKHALI M. N. SECONDARY SCHOOL</td>
                                                </tr>
                                                <tr>

                                                    <td>GPA</td>
                                                    <td className='fw-bold'>4.69</td>
                                                    <td ></td>
                                                    <td ></td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <h4 className='text-center fw-bold'>GRADE SHEET</h4>

                                    <div className="table-responsive">
                                        <table style={{ backgroundColor: ' rgb(238, 238, 238)', border: 'white', color: 'black' }} class="table table-striped table-bordered ">
                                            <thead>
                                                <tr className='table-dark'>
                                                    <th scope="col">Code</th>
                                                    <th scope="col">Subject</th>
                                                    <th scope="col">Grade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>101</td>
                                                    <td>BANGLA</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>107</td>
                                                    <td>ENGLISH</td>
                                                    <td>A-</td>
                                                </tr>
                                                <tr>
                                                    <td>109</td>
                                                    <td>MATHEMATICS</td>
                                                    <td>A+</td>
                                                </tr>

                                                <tr>
                                                    <td>127</td>
                                                    <td>GENERAL SCIENCE</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>111</td>
                                                    <td>RELIGION (ISLAM)</td>
                                                    <td>A+</td>
                                                </tr>
                                                <tr>
                                                    <td>142</td>
                                                    <td>INTRODUCTION TO BUSINESS	</td>
                                                    <td>A+</td>
                                                </tr>
                                                <tr>
                                                    <td>146</td>
                                                    <td>ACCOUNTING</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>143</td>
                                                    <td>BUSINESS ENTREPRENEURSHIP</td>
                                                    <td>A</td>
                                                </tr>

                                                <tr>
                                                    <td>134</td>
                                                    <td>AGRICULTURE STUDIES</td>
                                                    <td>A+</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default StudentResult;