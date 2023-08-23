import React, { useReducer } from "react";
import "./carousel.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import ImageSlideComp from "./ImageSlideComp";

const reducer = (state, disptach) => {};
const CarouselComp = () => {
  const initialValue = {
    images: [img1, img2, img3],
  };

  const [data, disptach] = useReducer(reducer, initialValue);
  return (
    <section className="main-div">
      <ImageSlideComp state={data} disptach={disptach} />
    </section>
  );
};

export default CarouselComp;
