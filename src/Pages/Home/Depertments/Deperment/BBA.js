import React, { useEffect, useState } from 'react';


const BBA = () => {

    const [noticeInformation, setNoticeInformation] = useState([])

    useEffect(() => {
        fetch('./NoticeData.json')
            .then(res => res.json())
            .then(data => setNoticeInformation(data))
    }, [])

    return (
        <div >
            <div className='dept-header rounded-top'>
                <div className=" d-flex justify-content-between">
                    <div>
                        <img width="50" src="https://i.ibb.co/kKYcvWy/dcc.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <h5 className='text-warning fw-bold '>
                            BBA PROFESSIONAL
                        </h5>
                        <small className="text-light"> NOTICE BOARD</small>

                    </div>
                    <div>
                        <img width="40" src="https://i.ibb.co/NVv0HNR/logonu.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="all-notice">
                <div className='mb-3'>
                    <table class="table table-bordered   border-light">
                        <tbody>
                            {
                                noticeInformation?.map(data => <tr>
                                    <td className='text-danger'>{data.date}</td>
                                    <td>{data.name}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>

                    <div className="text-center px-3 pb-3 mx-2">
                        <div className="dept-head-info">
                            <div className="row ">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <img width="100" src="https://dotcom.vip/dcc/ap/upload/MoshBBA26082021.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 my-auto col-12">
                                    <h6 style={{ color: ' #000', fontSize: '16px', margin: 0 }} className='text-center fw-bold'>
                                        Mr. Mohammad Mosharraf Hossain
                                        Associate Professor & Head
                                        BBA PROFESSIONAL
                                    </h6>
                                </div>
                                <div className="col-lg-3 col-md-3 my-auto col-12">
                                    <div className=''>
                                        <button style={{ backgroundColor: '#c5e1a5' }} className='btn'>Details</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div >
    );
};

export default BBA;