import React from 'react';

const HonsDeperment = () => {
    return (
        <>
            <div className="honsHead">
                <h3 style={{ marginBottom: 0 }} className='Hons  px-2'>HONS. DEPERMENT
                </h3>
                <table style={{ width: '100%' }} class="table table-hover">
                    <tbody className='text-light'>
                        <tr>
                            <th scope="row">
                                <button className='btn' >      DEPT. OF ACCOUNTING
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <button className='btn'>        DEPT. OF BANGLA
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <button className='btn'>         DEPT. OF BBA

                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <button className='btn'>    DEPT. OF CSE
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <button className='btn'>     DEPT. OF ENGLISH
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <button className='btn'>S    DEPT. OF FINANCE
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <button className='btn'>     DEPT. OF ECONOMICS </button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <button className='btn'>    DEPT. OF MANAGEMENT
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <button className='btn'>    DEPT. OF MARKETING </button>
                            </th>
                        </tr>
                    </tbody>
                </table>

            </div>
            <button className='btn allNotice mt-3'>ALL DEPT INFO</button>
        </>
    );
};

export default HonsDeperment;