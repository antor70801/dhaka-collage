import React from 'react';
import  { useEffect, useState } from 'react';

const Teacher = () => {
    const [facultinfo, setFacultyInfo] = useState([])
    useEffect(() => {
        fetch('./teachersData.json')
            .then(res => res.json())
            .then(data => setFacultyInfo(data))
    }, [])
    return (
        <div>
            <h3 className='fw-bold' style={{
                color: '#fff', padding: '10px', background: '#263238', borderRadius: '3px'
            }}>
                <img src='https://i.ibb.co/r6LJbbj/faculty.png' alt='' width='30' /> শিক্ষক তালিকা(জ্যেষ্ঠতার ক্রমানুসারে)</h3>

            <table class="table table-hover" style={{ width: '100%', margin: 'auto', backgroundColor: '#F1F8E9' }}>
                {
                    facultinfo.map(data => <tr>
                        <td style={{ width: '40%' }}>
                            <b style={{ fontSize: '16px', color: '#004D40' }}> {data.name} </b>  <br />
                            <span style={{ fontSize: '15px', color: '#607D8B' }}>{data.designation}<br /></span> </td>

                        <td style={{ width: '40%' }}>   <img src='https://i.ibb.co/HprT6wf/email.png' alt='' width='35' /> {data.email}<br />
                            <img src='https://i.ibb.co/M1XSpH0/lectureicon.png' alt='' width='35' /> Total Lecture Upload = {data.totalContent} <br /><img src='https://i.ibb.co/Hr1RDkM/youtubeicon.png' alt='' width='35' /> YouTube Lecture = {data.ytContent}
                        </td>
                        <td style={{ width: '10%' }}> <img alt='' src={data.img} width="100" /> </td>
                        <td style={{ width: '10%' }}> <a href="index.php?request=facultyProfile&userid=1431161003" class='btn btn-primary'> Profile </a>  </td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default Teacher;