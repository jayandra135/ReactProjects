import React, { useContext, useEffect } from "react";
import { MyNewContext } from "./contextApi/MyContext";
import { getDiscoverMovies } from "./Api";
import CardComp from "./CardComp";
const DiscoverMovies = () => {
  const { discoverData, setDiscoverData } = useContext(MyNewContext);

  useEffect(() => {
    getDiscoverMovies()
      .then((response) => setDiscoverData(response.data.results))
      .catch((error) => console.log(error));
  }, []);
  // console.log(discoverData);
  return (
    <>
      <CardComp discoverData={discoverData} />
    </>
  );
};

export default DiscoverMovies;
