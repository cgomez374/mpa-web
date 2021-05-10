import React from "react";

const StartupTopBar = ({ data }) => {
    const numFormat = (val) => {
        return String(val).replace(/(.)(?=(\d{3})+$)/g, '$1,')
    }
    const convert = (val) => {
        if (val >= 1000000000000) {
            val = (val / 1000000000000) + "T"
            return val + "T"
        } else if (val >= 1000000000) {
            val = (val / 1000000000) + "B"
            return val
        } else if (val >= 1000000) {
            val = (val / 1000000) + "M"
            return val
        } else if (val >= 1000) {
            val = (val / 1000) + "K"
            return val
        } else {
            return val
        }
    }

    return (
        <>
            <div className="container top__container">
                <div className="col">
                    <div className="row top__left-container">
                        <div className="top__detail-container">
                            <a href="/incubator" className=""><i className="fas fa-arrow-left top__button-back"></i></a>
                            <img className="top__logo" src={data.logoImg} />
                            <h3 className="top__name">{data.logoName}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 top__container-column">
                    <div className="row top__center-container">
                        <div className="top__shares">
                            <p>Shares offered</p>
                            <p>{convert(data.shareOffered)} shares</p>
                        </div>
                        <div className="top__funds-container">
                            <div className="top__funds">
                                <h3 className="top__funds-topic">
                                    Funds raised
                                </h3>
                                <h3 className="top__funds-percentage">
                                    {data.percent}% complete
                                </h3>
                            </div>
                            <h3 className="top__funds-amount">${numFormat(data.amount)}/${numFormat(data.targetAmount)}</h3>
                            <div className="progress" style={{ borderRadius: "30px" }}>
                                <div className="progress-bar progressbar__bg" role="progressbar" style={{ width: `${data.percent}%`, borderRadius: "30px" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="top__button">
                        <a href="#" className="button btn-gradient">
                            Fund Startups
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default StartupTopBar;

