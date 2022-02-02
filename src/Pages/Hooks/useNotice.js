import { useEffect, useState } from 'react';

const useNotice = () => {


    const [noticeInformation, setNoticeInformation] = useState([])

    useEffect(() => {
        fetch('./projectData.json')
            .then(res => res.json())
            .then(data => setNoticeInformation(data))
    }, []);
    return [noticeInformation, setNoticeInformation];


};

export default useNotice;