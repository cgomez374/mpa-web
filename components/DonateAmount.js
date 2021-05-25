import React from 'react'

const DonateAmount = () => {
    return (
        <>
            <form className="step__amount">
                <h2>Choose the amount of your gift:</h2>
                <div className="row step__amount-items">
                    <div className="btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-step">
                            <input type="radio" name="options" id="option1" autoComplete="off" />$250
                        </label>
                        <label className="btn btn-warning">
                            <input type="radio" name="options" id="option2" autoComplete="off" /> $100
                        </label>
                        <label className="btn btn-warning">
                            <input type="radio" name="options" id="option3" autoComplete="off" /> Radio
                        </label>
                    </div>
                    {/* <div className="col-lg-3 col-md-3 col-sm-6 col-custom">
                                <div className="step__amount-item"><p>$250</p></div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-custom">
                                <div className="step__amount-item"><p>$100</p></div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-custom">
                                <div className="step__amount-item"><p>$75</p></div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-custom">
                                <div className="step__amount-item"><p>$50</p></div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-custom">
                                <div className="step__amount-item"><p>$30</p></div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-custom">
                                <div className="step__amount-item"><p>$10</p></div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-custom">
                                <div className="step__amount-item"><p>$5</p></div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-custom">
                                <div className="step__amount-item">
                                    <input type="number" className="form-control step__amount-input" value="" />
                                </div>
                            </div> */}
                </div>
                {/* <div className="step__button mt-2">
                            <button className="button btn-gradient">Continue</button>
                        </div> */}
            </form>
        </>
    )
}

export default DonateAmount;