import React from "react";
import { useLoaderData } from "react-router";

const DisplayPostid = () => {
  const loda = useLoaderData();
  console.log(loda);

  
  return (
    <div>

        <div className="card w-96 bg-gray-500 py-4 shadow-sm mt-3 space-y-3 ">
          <p>{loda.id}</p>
          <p>Body : {loda.body}</p>
        </div>
    </div>
  );
};

export default DisplayPostid;
