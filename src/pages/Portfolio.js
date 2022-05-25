import React from "react";

const Portfolio = () => {
  return (
    <div className="text-center">
      <h1 className="border-y-2 border-indigo-500  w-60 mt-5 text-center m-auto  text-2xl font-bold text-primary py-2 ">
        MY PORTFOLIO
      </h1>
      <p className="py-3">
        <span className="text-xl font-bold ">Name :</span>Md Rasel Ahmed
      </p>
      <p className="py-3">
        <span className="text-xl font-bold ">Email :</span>nhd305812@gmail.com
      </p>
      <p className="py-3">
        <span className="text-xl font-bold ">Educational Background :</span>{" "}
        SSC,2016 HSC/Alim,2018{" "}
      </p>
      <p className="py-3">
        <span className="text-xl font-bold ">Expert on :</span>
        HTML,CSS,JS,REACT,TAILWIND,BOOTSTRAP,MUI,WORDPRESS
        <p>
          <span className="text-xl font-bold ">Beginner lavel :</span>Node
          js,express,mongoDB
        </p>
        <p className="text-xl font-bold mt-3">MY Projects</p>
        <p>
          {" "}
          <a
            className="btn btn-link"
            href="https://condescending-kare-7080dd.netlify.app/"
          >
            Bootstrap project with responsive ,
          </a>
        </p>
        <p>
          <a
            className="btn btn-link"
            href="https://cranky-hoover-510f35.netlify.app/"
          >
            Boostrap ans javascript with responsive ,
          </a>
        </p>
        <p>
          <a
            className="btn btn-link"
            href="https://red-onion-firebase-9118c.web.app/menus/breakfast"
          >
            React with firebase project
          </a>
        </p>
        <p>
          <a
            className="btn btn-link"
            href="https://stored-bike-warehous.web.app/"
          >
            React,node,express,mongodb,firebase,mui
          </a>
        </p>
      </p>
    </div>
  );
};

export default Portfolio;
