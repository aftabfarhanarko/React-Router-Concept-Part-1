import React from "react";
import { useLoaderData } from "react-router";

const Clones = () => {
  const loadData = useLoaderData();
  console.log(loadData);

  return (
    <div className="card w-96 bg-gray-500 py-4 shadow-sm mt-3 space-y-3 ">
      <h2 className="">City : {loadData.address.city}</h2>
      <h2 className="">Go : {loadData.address.geo.lng}</h2>
      <div className="">Company : {loadData.company.catchPhrase}</div>
    </div>
  );
};

export default Clones;
