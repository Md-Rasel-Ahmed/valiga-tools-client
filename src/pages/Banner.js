import React from "react";

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://veligaa.com/Home/Image/11449"
          class="max-w-sm rounded-lg "
        />
        <div>
          <h1 class="text-xl font-bold">BUY FROM US GET YOURS</h1>
          <h1 class="text-5xl font-bold text-primary">PROFESSIONAL TOOLS</h1>
          <h1 class="text-2xl font-bold">FOR AFFORDABLE PRICES </h1>
          <p class="py-6">50% years of machining and metalworking experience</p>
          <button class="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
