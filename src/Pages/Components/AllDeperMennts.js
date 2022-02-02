import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllDeperMennts = () => {
    const [deperments, setDeperments] = useState([])
    useEffect(() => {
        fetch('./DeptInformation.json')
            .then(res => res.json())
            .then(data => setDeperments(data))
    }, [])
    console.log(deperments);
    return (
        <div>
            <div class='leftWeb'>
                <div class='leftWebhead'>
                    <h4 style={{ marginLeft: '10px' }}> <img src="d" alt='' width='30' />
                        <span style={{ color: '#fff' }} > DEPARTMENTS</span></h4>
                </div>


                <ul id="menu">
                    {
                        deperments.map(data => <li key={data.name}>
                            <Link to="/cse-details">
                                <img src={data.icon} alt='' width="15" />
                                &nbsp;&nbsp; {data.name}</Link>
                        </li>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default AllDeperMennts;