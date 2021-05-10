import React from "react";
import Link from "next/link"

const FeaturedInfoCard = ({ data }) => {
    const numFormat = (val) => {
        return String(val).replace(/(.)(?=(\d{3})+$)/g, '$1,')
    }
    return (
        <>
            <div className="card card__container">
                <div className="card-body">
                    <div className="card__header mb-2">
                        <img src={data.logoImg} className="card__header-logo" />
                        <Link href={`/startup-info/${data.id}`}>
                            <h2 className="card__header-title" style={{ cursor: "pointer" }}>{data.logoName}</h2>
                        </Link>

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

                </div>
            </div>
        </>
    );
};
export default FeaturedInfoCard;

