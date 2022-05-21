import React, { useEffect, useState } from "react";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <>
      <h2 className="text-primary text-center text-2xl py-2">OUR TOOLS</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-5">
        {tools?.map((tool) => {
          return (
            <div class="card w-46 bg-base-100 shadow-xl">
              <figure>
                <img width="150" height="100" src={tool.img} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>

                <p>{tool.description}</p>
                <h2 class="card-title text-primary text-bold">
                  Minimum orders quantity :{tool.minimumOrder}
                </h2>
                <h2 class="card-title text-primary text-bold">
                  Available quantity :{tool.availableQuentity}
                </h2>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary btn-block">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tools;
