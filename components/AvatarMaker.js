import React, { Component } from 'react'

const AvatarMaker = () => {
    return (
    <section id="avatar" className="course-one__top-title home-one">
        <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="countdown-one__content">
                            <h2 className="countdown-one__title block-title__title"> Join <br/> Blockchain <br/> with your NFT</h2>
                            <p className="countdown-two__tag-line">Create your own avatar!</p>
                            <p className="countdown-two__text">Regardless of age, or background, our international network has a place for you!</p>
                            <div>
                            </div>
                        </div>
                    </div>
                    <iframe src="https://avatarmaker.com/" style={{ height: `600px`}, {width: `600px`}}></iframe> 
                    <div className="col-lg-6"></div>
            </div>
        </div>
</section>  
    );
}
export default AvatarMaker;