import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetch("services.json0")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-2  px-5">
      <div>items</div>
      <div>Details</div>
    </div>
  );
};

export default Purchase;
