import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactStars from "react-rating-stars-component";
import auth from "../firebase.init";
import { format } from "date-fns";
import { toast } from "react-toastify";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [user] = useAuthState(auth);
  let formateDAte = format(new Date(), "PP");
  const handleReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    if (rating < 1) {
      alert("please select a rating");
      return;
    } else {
      fetch("https://valiga-hardware.herokuapp.com/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user?.email,
          review: review,
          rating: rating,
          name: user?.displayName,
          date: formateDAte,
          img: user?.photoURL,
        }),
      })
        .then((res) => res.json())
        .then((data) => toast.success("Review successfull"));
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
          required
          className="input input-bordered mt-3 block w-80"
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
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddReview;
