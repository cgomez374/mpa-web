import React, { useState, useEffect } from "react";
import FeaturedCard from '../components/FeaturedCard'
import datas from '../helpers/mockData'

const postsPerPage = 5;
let arrayForHoldingPosts = [];

const FeaturedUpcoming = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(5);

  const loopWithSlice = (start, end) => {
    const slicedPosts = datas.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

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
            {postsToShow.map((d, i) => (
              <div className="col-xl-3 col-md-6 col-sm featured__card" key={i}>
                <FeaturedCard data={d} />
              </div>
            ))}
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <a className="button btn-transparent" onClick={handleShowMorePosts}>Load more</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeaturedUpcoming;

