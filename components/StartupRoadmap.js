import React from 'react';

const StartupRoadmap = ({ item }) => {

    return (
        <>
            <div className="col-lg-3 mb-3">
                <div className="roadmap__card">
                    <h2 className="roadmap__year">{item.year}</h2>
                    <div className="roadmap__target mt-3">
                        <p>{item.target}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StartupRoadmap