import React from 'react';
import Chairman from '../../Components/Chairman';
import Principle from '../../Components/Principle';

const Banner = () => {
    return (
        <div>
            <div style={{ borderColor: '#E3F1FC' }} className=' border-end border-start border-2  px-3 pt-2'>
                <div className="row">
                    <div style={{ paddingBottom: '0', marginBottom: '0' }} className="col-lg-3 col-md-3 col-12  ">
                        <Chairman></Chairman>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div id="carouselExampleSlidesOnly" class="carousel slide m-2" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.dhakacitycollege.edu.bd/images/slider/1582125739.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item active">
                                    <img src="https://dotcom.vip/dcc/images/slider/1574051271.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://dotcom.vip/dcc/images/slider/1574051309.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://dotcom.vip/dcc/images/slider/1574051365.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <Principle></Principle>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;