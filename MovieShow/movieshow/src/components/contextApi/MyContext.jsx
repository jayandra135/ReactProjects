import React, { createContext, useState } from "react";

//import axios from "axios";
export const MyNewContext = createContext();
const MyContext = ({ children }) => {
  const [discoverData, setDiscoverData] = useState([]);
  const [findMovieID, setMovieID] = useState([]);

  return (
    <>
      <MyNewContext.Provider
        value={{
          discoverData,
          setDiscoverData,
          findMovieID,
          setMovieID,
        }}
      >
        {children}
      </MyNewContext.Provider>
    </>
  );
};

export default MyContext;
