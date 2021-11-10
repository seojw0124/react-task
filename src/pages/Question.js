import React from 'react';

const Question = () => {
    return (
        <>
            <div className="PngImg">
                <img src={process.env.PUBLIC_URL + 'googleDevelopers.png'} alt="png" width="200px"/>
                <img src={process.env.PUBLIC_URL + 'GDSC-Chapter-Logo.png'} alt="png" width="300px"/>
            </div>
        </>
    );
};

export default Question;