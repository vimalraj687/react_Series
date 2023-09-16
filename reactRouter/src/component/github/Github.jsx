import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/vimalraj687")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  if (!data) {
    // Handle the case when data is not available yet
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-gray-500 text-white text-3xl p-4 text-center">
        Github Followers : {data.node_id}
        <img src={data.avatar_url} alt="" />
      </div>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/vimalraj687");
  const data = await response.json();
  return data; // Return the fetched dat
};
