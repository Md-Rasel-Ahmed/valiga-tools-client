import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://veligaa.com/Home/Image/11449"
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-xl font-bold">BUY FROM US GET YOURS</h1>
          <h1 className="text-5xl font-bold text-primary">
            PROFESSIONAL TOOLS
          </h1>
          <h1 className="text-2xl font-bold">FOR AFFORDABLE PRICES </h1>
          <p className="py-6">
            50% years of machining and metalworking experience
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
