import React from "react";

const Review = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-primary py-2 text-center">
        Customers Review
      </h2>
      <div class="lg:w-1/2 sm:w-4/5 md:w-4/5 m-auto p-5 mb-5 card  bg-base-100 shadow-xl">
        <div className="flex gap-2">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </div>
          <div>
            <div class="rating">
              <input
                type="radio"
                disabled
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                disabled
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                disabled
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                disabled
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                disabled
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <h2 className="px-2">23/22/254</h2>
            </div>
            <h1 className="text-xl font-bold">Md Rasel Ahmed</h1>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed
          culpa animi, quisquam sint similique quidem, debitis amet ratione
          numquam ab a? Quas itaque nostrum debitis possimus? Et omnis,
          veritatis dolorem nisi s
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Review;
