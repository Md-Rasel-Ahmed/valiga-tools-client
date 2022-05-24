import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const Review = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("https://valiga-hardware.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  return (
    <div className="p-5">
      <h2 className="border-y-2 border-indigo-500  w-60 text-center m-auto  text-2xl font-bold text-primary py-2">
        Customers Review
      </h2>

      {allReviews?.map((review) => {
        return (
          <div class="lg:w-1/2 sm:w-4/5 md:w-4/5 m-auto p-5 mb-5 card  bg-base-100 shadow-xl">
            <div className="flex gap-2">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img src={review.img} />
                </div>
              </div>
              <div>
                <div>
                  <ReactStars
                    count={5}
                    // onChange={(e) => ratingChanged(e)}
                    size={24}
                    activeColor="#ffd700"
                    value={review.rating}
                    edit={false}
                  />

                  <h2 className="px-2">{review.date}</h2>
                </div>
                <h1 className="text-xl font-bold">{review.name}</h1>
              </div>
            </div>
            <p>{review.review}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
