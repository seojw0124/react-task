import React from 'react';

const Introduce = () => {
    return (
        <>
            <img className="BannerImg" src={process.env.PUBLIC_URL + 'GreenBanner.png'} alt="배너"/>
            <div className="LayoutContainer">
                <h1>About us</h1>
            </div>
        </>
    );
};

export default Introduce;