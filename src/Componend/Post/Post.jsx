import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const Post = () => {
    const posta = useLoaderData();
  console.log(posta);
  const navioget = useNavigate();
  const heandler = () =>{
    navioget("/mylist")
  }
  
    return (
      <div className='grid grid-cols-2 gap-5'>
        {
            posta.map(element =>  <div className="card w-96 bg-gray-500 py-4 shadow-sm mt-3 space-y-3 ">

          <p className="">{element.title} </p>
           <button className="bg-amber-300 text-black px-3 py-1 rounded-lg w-[130px] mx-auto"> <Link to={`/post/${element.id}`}>Show Details</Link></button>
           <button onClick={heandler}>More Layout</button>
        </div>)
        }
      </div>
    );
};

export default Post;