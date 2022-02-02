import React from 'react';
import './Navigetionbar.css'
import img from '../images/1574052112.png'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <nav id="navbar" class="navbar navbar-expand-lg navbar-light  navbar-default fixed-top  sticky ">
                <div class="container">
                    <div className='d-flex'>

                        <button class="navbar-toggler border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon fs-small"></span>
                        </button>
                        <Link class="navbar-brand" to="/"><img className='nav-img img-fluid' src={img} alt="logo" /></Link>
                    </div>

                    {/*  <div class="navbar-header justify-content-end d-flex ">
                        <a class="navbar-brand" href="/"><img className='nav-img img-fluid' src={img} alt="logo" /></a>
                        <button class="navbar-toggler justify-content-end  mx-4 my-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <small> <span class="navbar-toggler-icon"></span></small>
                        </button>
                    </div>  */}



                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="mymenu navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="scroll active myli"><Link className=' nav-link' to="/" style={{ color: '#1A237E', fontWeight: 'bold' }}>Home</Link></li>

                            <li class="dropdown scroll ">
                                <a href="/" class="dropdown-toggle nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#1A237E', fontWeight: 'bold' }}>Message </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={{ marginLeft: '100px' }}>
                                    <li >
                                        <Link class="dropdown-item" to="/principal-message">
                                            Principal </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="/chairman-message">
                                            Chairman </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="/vice-principal-message">
                                            Vice principal </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="/principal-message">
                                            Principal </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="scroll  myli"><Link to="/contact" className=' nav-link' style={{ color: '#1A237E', fontWeight: 'bold' }}>Contact</Link></li>




                            <li class="dropdown scroll">
                                <a href="/" class="dropdown-toggle nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#1A237E', fontWeight: 'bold' }}>About <b class="caret"></b></a>

                                <ul class="dropdown-menu dropdown-menu-end" style={{ marginLeft: '100px' }}>
                                    <li><Link class="dropdown-item" to="/about-us">About Us </Link></li>

                                    <li><Link class="dropdown-item" to="/Faculty-list">Faculty Members</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown scroll">
                                <a href="/" class="dropdown-toggle nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#1A237E', fontWeight: 'bold' }}>Login<b ></b></a>
                                <ul class="dropdown-menu dropdown-menu-end" style={{ marginLeft: '100px' }}>

                                    <li><Link class="dropdown-item" to='/signup'>Honours / Masters Admission</Link></li>
                                    <li><Link class="dropdown-item" to='/how-to-fill-from'>How Form Fill-Up(Hons/Ms)</Link></li>
                                    <li><Link class="dropdown-item" to='/login'>HSC Login 2020-21</Link></li>
                                    <li><Link class="dropdown-item" to='/login'>HONS / Masters   Login</Link></li>
                                    <li><Link class="dropdown-item" to='/login'>HSC Login 2019-20</Link></li>
                                    <li><Link class="dropdown-item" to='/login'>HONS / Masters Login <br />(bKash Payment)</Link></li>
                                </ul>
                            </li>
                            <li class="scroll  myli">
                                <button className='rounded-3 btn-danger'>
                                    <Link to="/results" className='text-light nav-link' style={{ fontWeight: 'bold' }}>Results</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default NavigationBar;