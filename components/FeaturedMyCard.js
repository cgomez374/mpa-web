import React from "react";
import Link from "next/link"

const FeaturedMyCard = ({ data }) => {
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
            <div className="card card__container">
                <div className="card-body">
                    <div className="card__header">
                        <img src={data.logoImg} className="card__header-logo" />
                        <h2 className="card__header-title">{data.logoName}</h2>
                    </div>
                    <div className="row container mb-3">
                        <div className="card__info mr-auto">
                            <p>Amount Invested</p>
                            <h3 className="">${convert(data.amount)}</h3>
                        </div>
                        <div className="card__info">
                            <p>Shares owned</p>
                            <h3 className="">{convert(data.shares)}</h3>
                        </div>
                    </div>

                    <div className="fund__container">
                        <div className="fund__top">
                            <h3 className="fund__topic">
                                Fundraised
                            </h3>
                            <h3 className="fund__percentage">
                                {data.percent}% complete
                            </h3>
                        </div>
                        <h3 className="fund__amount">${numFormat(data.amount)}/${numFormat(data.targetAmount)}</h3>
                        <div className="progress" style={{ borderRadius: "30px" }}>
                            <div className="progress-bar progressbar__bg" role="progressbar" style={{ width: `${data.percent}%`, borderRadius: "30px" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="card__button-container">
                        <Link href={`/startup-info/${data.id}`}>
                            <a className="button btn-filled">More Info</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FeaturedMyCard;

