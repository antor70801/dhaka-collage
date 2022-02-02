import React from 'react';
import { Link } from 'react-router-dom';

const AboutCollage = () => {
    return (
        <div className="about-collage">
            <h3 style={{ marginBottom: 0 }} className='visitorAds px-2'>কলেজ সম্পর্কিত তথ্য
            </h3>
            <table style={{ width: '100%' }} class="table table-hover">
                <tbody className=' black-link'>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/GoverningBody'>
                                <img width='15' src="https://i.ibb.co/r6LJbbj/faculty.png" alt="" />&nbsp;&nbsp;GOVERNING BODY</Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src=" https://i.ibb.co/YLHTVGy/ico5.png" alt="" />&nbsp;&nbsp;FACULTY MEMBERS
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src=" https://i.ibb.co/pwcnWqw/ico6.png" alt="" />&nbsp;&nbsp;OFFICE STAFF
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src="https://i.ibb.co/wyV0PyX/icon4.png" alt="" />&nbsp;&nbsp;CLASS LECTURE
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src="https://i.ibb.co/TmYs6Nk/icon9.png" alt="" />&nbsp;&nbsp;CREATIVE STUDENT INFO
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'> <img width='15' src="https://i.ibb.co/yFKJT1K/icon10.png" alt="" />&nbsp;&nbsp;STUDENT ATTENDANCE</Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src="https://i.ibb.co/v3CNGPR/icon11.png" alt="" />&nbsp;&nbsp;STUDENT INFO
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src="https://i.ibb.co/wB0Cd8F/lecture-icon.png" alt="" />&nbsp;&nbsp;ACADEMIC CALENDAR
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src=" https://i.ibb.co/9gtR65d/star1.png" alt="" />&nbsp;&nbsp;ACADEMIC CALENDAR
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src="https://i.ibb.co/tmmcjpz/students-Info.png" alt="" />&nbsp;&nbsp;SYLLABUS
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src="https://i.ibb.co/r6LJbbj/faculty.png" alt="" />&nbsp;&nbsp;PREVIOUS PRINCIPAL INFO
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src="https://i.ibb.co/YLHTVGy/ico5.png" alt="" />&nbsp;&nbsp;EBOOK
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/'>
                                <img width='15' src="https://i.ibb.co/pwcnWqw/ico6.png" alt="" />&nbsp;&nbsp;ROUTINES
                            </Link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <button className='btn' > <Link to='/results'>
                                <img width='15' src="https://i.ibb.co/wyV0PyX/icon4.png" alt="" /> &nbsp;&nbsp;RESULTS
                            </Link>
                            </button>
                        </th>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default AboutCollage;