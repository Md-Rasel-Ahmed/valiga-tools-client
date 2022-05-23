import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactStars from "react-rating-stars-component";
import auth from "../firebase.init";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [user] = useAuthState(auth);
  const handleReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    if (rating < 1) {
      alert("please select a rating");
      return;
    } else {
      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user?.email,
          review: review,
          rating: rating,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  const ratingChanged = (e) => {
    console.log("change", e);
    setRating(e);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary py-2">Add a new review</h2>
      <form onSubmit={handleReview}>
        <textarea
          class="input input-bordered mt-3 block w-80"
          name="review"
          id=""
          cols="50"
          rows="50"
          placeholder="Type you review....."
        ></textarea>
        <div className="flex gap-2 items-center">
          <p> Rating :</p>
          <ReactStars
            count={5}
            onChange={(e) => ratingChanged(e)}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        {/* <input type="text" name="name" placeholder="" /> */}
        <button type="submit" class="btn btn-primary mt-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddReview;
