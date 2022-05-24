import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://valiga-hardware.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2 className="border-y-2 border-indigo-500  w-40 text-center m-auto  text-2xl font-bold text-primary py-2 ">
        OUR TOOLS
      </h2>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default Tools;
