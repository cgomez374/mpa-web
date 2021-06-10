import React from "react";
import Link from "next/link"
import { numFormat, percentFund } from "../helpers/formatIncubator"

const FeaturedCard = ({ data }) => {

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
                                {percentFund(data.targetAmount, data.amount)}% complete
                            </h3>
                        </div>
                        <h3 className="fund__amount">${numFormat(data.amount)}/${numFormat(data.targetAmount)}</h3>
                        <div className="progress" style={{ borderRadius: "30px" }}>
                            <div className="progress-bar progressbar__bg" role="progressbar" style={{ width: `${percentFund(data.targetAmount, data.amount)}%`, borderRadius: "30px" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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

