import React from 'react';

const CodeofConduct = () => {
    return (
        <>
            <img className="BannerImg" src={process.env.PUBLIC_URL + 'RedBanner.png'} alt="배너"/>
            <div className="LayoutContainer">
                <h1>Code of Conduct</h1>
            </div>
        </>
    );
};

export default CodeofConduct;