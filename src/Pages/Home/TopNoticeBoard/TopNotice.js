
import { Link } from 'react-router-dom';
import useNotice from '../../Hooks/useNotice'
const TopNotice = () => {

    const [noticeInformation] = useNotice();


    return (
        <div>
            <div className='noticeBoardB '>
                <h3 style={{ color: '#fff', padding: '10px', backgroundColor: '#004D40', borderRadius: '3px', textAlign: 'center' }} className='text-light text-center py-2'>
                    <img width='30' src="https://www.dhakacitycollege.edu.bd/images/notice.png" alt="" />
                    NOTICE BOARD</h3>
            </div>
            <div className="all-notice">
                <div className='m-3 notice-link'>
                    <table class="table table-bordered table-hover  border-success">
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
    );
};

export default TopNotice;