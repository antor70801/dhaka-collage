import React, { useEffect, useState } from 'react';

const PhoneNumber = () => {
    const [numberInformation, setNumberInformation] = useState([])
    useEffect(() => {
        fetch('./contactInformation.json')
            .then(res => res.json())
            .then(data => setNumberInformation(data))
    }, [])
    return (
        <div className='text-center my-5'>
            <div style={{ width: '100%', textAlign: 'center', backgroundColor: '#00bfa5', padding: '5px' }}>
                <h3 style={{ color: '#fff' }}>ঢাকা সিটি কলেজ </h3>
                <h3 style={{ color: '#fff' }}>বিভিন্ন বিভাগ/অফিসের টেলিফোন নম্বরসমূহ </h3>
            </div>
            <div className="table-responsive">
                <table class="table table-bordered mytablecon">
                    <thead>
                        <tr>
                            <th scope="col">ক্রমিক</th>
                            <th scope="col">বিভাগ/অফিসের নাম</th>
                            <th scope="col">ফোন নং</th>
                            <th scope="col">এক্সটেনশন নম্বর</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            numberInformation?.map(data => <tr>
                                <td >{numberInformation.indexOf(data) + 1}</td>
                                <td className='text-start'>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.extNumber}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default PhoneNumber;