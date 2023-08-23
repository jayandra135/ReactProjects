import React from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
const ImageSlideComp = ({ state, dispatch }) => {
  return (
    <div className="container">
      {state.images.map((ele, index) => {
        return <img src={ele} key={index} alt="" />;
      })}

      <div className="buttons">
        <p className="prev">
          <SkipPreviousIcon />
        </p>
        <p className="next">
          <SkipNextIcon />
        </p>
      </div>
    </div>
  );
};

export default ImageSlideComp;
