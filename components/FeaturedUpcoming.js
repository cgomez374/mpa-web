import React, { useState, useEffect } from "react";
import FeaturedCard from '../components/FeaturedCard'
import datas from '../helpers/mockData'

const FeaturedUpcoming = () => {

  const [postNum, setPostNum] = useState(5);
  const handleClick = () => {
    setPostNum(prevPostNum => prevPostNum + 5)
  }

  return (
    <>
      <section className="featured__wrapper pb-5">
        <div className='container'>
          <div className='row'>
            <div className="col-lg-3 featured__text">
              <h2 className="featured__title">
                Upcoming Startups
              </h2>
              <p className="featured__subtitle">
                These visionary componies and disruptors are on their journey to change the world.
              </p>
            </div>
            {datas.slice(0, postNum).map(post => (
              <div className="col-xl-3 col-md-6 col-sm featured__card" key={post.id}>
                <FeaturedCard data={post} />
              </div>
            ))}
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <a className="button btn-transparent" onClick={handleClick}>Load more</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeaturedUpcoming;

