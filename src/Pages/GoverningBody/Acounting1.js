import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar';
import AllDeperMennts from '../Components/AllDeperMennts';
import useNotice from '../Hooks/useNotice';


const Acounting1 = () => {
    const [noticeInformation] = useNotice();
    return (
        <div>
            <div>
                <NavigationBar></NavigationBar>
                <div className='m-3' style={{ paddingTop: 107 }}>
                    <div className="container">
                        <div className="row">
                            <div class="col-12 col-md-3 col-lg-3 social-buttons">
                                <AllDeperMennts></AllDeperMennts>
                            </div>
                            <div className="col-12 col-lg-9 col-md-9">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acounting1;