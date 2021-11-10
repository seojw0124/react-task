import React from 'react';

const Joinus = () => {
    return (
        <>
            <img className="BannerImg" src={process.env.PUBLIC_URL + 'BlueBanner.png'} alt="배너"/>
            <div className="LayoutContainer">
                <h1>함께 성장할 동료를 모집합니다</h1>
            </div>
        </>
    );
};

export default Joinus;