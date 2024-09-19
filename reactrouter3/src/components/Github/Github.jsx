import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  // const [data, setData] = useState([]);
  const data = useLoaderData();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <h1 className="bg-gray-500 text-center text-white p-4 rounded-r-lg">
        GitHub followers:{data.followers}
        <img className="text-center" src={data.avatar_url} width="300px" />
      </h1>
    </>
  );
}
export default Github;

export const githubinfo = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
