import React from "react";
import Link from "next/link"

const FeaturedCard = ({ data }) => {

    const convert = (val) => {
        return String(val).replace(/(.)(?=(\d{3})+$)/g, '$1,')
    }

    return (
        <>
            <div className="card card__container">
                <div className="card-body">
                    <div className="card__header">
                        <img src={data.logoImg} className="card__header-logo" />
                        <h2 className="card__header-title">{data.logoName}</h2>
                    </div>
                    <p className="card-text card__text">{`${data.description.substring(0, 50)}...`}</p>

                    <div className="fund__container">
                        <div className="fund__top">
                            <h3 className="fund__topic">
                                Fundraised
                            </h3>
                            <h3 className="fund__percentage">
                                {data.percent}% complete
                            </h3>
                        </div>
                        <h3 className="fund__amount">${convert(data.amount)}/${convert(data.targetAmount)}</h3>
                        <div className="progress" style={{ borderRadius: "30px" }}>
                            <div className="progress-bar progressbar__bg" role="progressbar" style={{ width: `${data.percent}%`, borderRadius: "30px" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="card__button-container">
                        <a href="#" className="button btn-filled">Fund Startup</a>
                        <Link href={`/startup-info/${data.id}`}>
                            <a className="button btn-outline">Learn More</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FeaturedCard;

