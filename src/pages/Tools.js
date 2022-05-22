import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
const text = ["Forest", "Building", "Tree", "Color"];

const Tools = () => {
  const [index, setIndex] = React.useState(0);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  // React.useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     1000 // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);
  console.log(tools);
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
                <h2 class="card-title text-accent text-bold">
                  Price :${tool.price}
                </h2>
                <div class="card-actions justify-end">
                  <Link
                    class="btn btn-primary btn-block"
                    to={`/purchase/${tool._id}`}
                  >
                    Buy Now
                  </Link>
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
