import React from "react";
import img from "../../src/images/carbon (4).png";
const Blog = () => {
  return (
    <div className=" p-5">
      <h1 className="text-2xl font-bold text-primary py-2 text-center">Blog</h1>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h1 className="text-2xl font-bold">
            {" "}
            How will you improve the performance of a React Application?
          </h1>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>1.Keeping component state local where necessary.</p>
          <p>2. Memoizing React components to prevent unnecessary re-renders</p>
          <p>3.Code-splitting in React using dynamix import</p>
          <p>4.Windowing or list virtualization in React</p>
          <p>5.Lazy Loading images in React</p>
        </div>
      </div>

      <div className="collapse mt-5">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h1 className="text-2xl font-bold">
            {" "}
            What are the different ways to manage a state in a React
            application?
          </h1>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            <span className="font-bold text-xl">Local State </span>
            Local state is data we manage in on or another component. Local
            state is most often managed in React using the useState Hook
          </p>
          <p>
            <span className="font-bold text-xl">Global State </span>
            Local state is data we manage across multiple components.
          </p>

          <p>
            <span className="font-bold text-xl">Server State </span>
            Data that comes from an external server that must be integrated with
            our ui state
          </p>
          <p>
            <span className="font-bold text-xl">URL State </span>
            Data that exists on our URL,S including the pathname and query
            parameters
          </p>
        </div>
      </div>
      <div className="collapse mt-5">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h1 className="text-2xl font-bold">
            {" "}
            What is a unit test? Why should write unit tests?
          </h1>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>

      <div className="collapse mt-5">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h1 className="text-2xl font-bold">
            {" "}
            How does prototypical inheritance work?
          </h1>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Simply put prototypical inheritance refers to othe ability to
            accesss object properties from another object.We use a javascript
            prototype to add new properties and methods to an exiting object
            construction.We can then essentially tel our js code to inheritance
            properties from a prototype
          </p>
        </div>
      </div>
      <div className="collapse mt-5">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h1 className="text-2xl font-bold">
            {" "}
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h1>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            <img src={img} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
