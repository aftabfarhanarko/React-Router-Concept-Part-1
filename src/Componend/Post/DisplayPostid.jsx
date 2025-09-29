import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const DisplayPostid = () => {
  const loda = useLoaderData();
const navite = useNavigate()

  return (
    <div>
      <div className="card w-96 bg-gray-500 py-4 shadow-sm mt-3 space-y-3 ">
        <p>{loda.id}</p>
        <p>Body : {loda.body}</p>
        <button className="bg-red-400" onClick={() => navite(-1)}>asdsad</button>
      </div>
    </div>
  );
};

export default DisplayPostid;
