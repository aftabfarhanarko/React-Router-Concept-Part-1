import React from "react";
import { Link, useLoaderData } from "react-router";

const Users = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div className="ml-[160px]">
      <h2>This is Users Data</h2>
      {user.map((element) => (
            <div className="card w-96 bg-gray-500 py-4 shadow-sm mt-3 space-y-3 ">
              <h2 className="">{element.username}</h2>
              <p>{element.website}</p>
              <div className="">{element.email}</div>
              <button className="bg-amber-300 text-black px-3 py-1 rounded-lg w-[130px] mx-auto">
                <Link to={`/users/${element.id}`}>Show Details</Link>
               </button>
             </div>
      ))}
    </div>
  );
};

export default Users;
