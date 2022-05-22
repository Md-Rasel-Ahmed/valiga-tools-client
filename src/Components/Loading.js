import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => {
  return (
    <div className=" grid justify-items-center py-2">
      {" "}
      <ReactLoading type="spinningBubbles" color="red" height={80} width={80} />
    </div>
  );
};

export default Loading;
