import React from 'react';

const GoogleMap = () => {
    return (
        <div>

            <div style={{ width: '100%', textAlign: 'center', backgroundColor: '#004d40', padding: '5px' }}>
                <h3 className='py-4 fw-bold' style={{ color: '#fff' }}>গুগল মানচিত্রে ঢাকা সিটি কলেজ</h3>

            </div>
            <iframe src="
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.216377487616!2d90.38051881506607!3d23.73966218459471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7db3123bb%3A0x33f738dc3ddbe79f!2sDhaka+City+College!5e0!3m2!1sen!2sbd!4v1517767338067"
                title='location ' width="100%" height="800" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
        </div>

    );
};

export default GoogleMap;