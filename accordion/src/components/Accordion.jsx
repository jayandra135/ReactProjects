import React, { useState } from "react";
import dataObject from "./api.json";
import Card from "@mui/material/Card";

import "./accordion.css";
import MyAccordComp from "./MyAccordComp";
const Accordion = () => {
  const [data, setData] = useState(dataObject);
  console.log(data);
  return (
    <>
      <section className="section-div">
        <h1>Accordion</h1>
        <Card variant="outlined" className="card-div">
          {data.map((ele, index) => {
            const { id, question, answer } = ele;
            return (
              <MyAccordComp key={id} question={question} answer={answer} />
            );
          })}
        </Card>
      </section>
    </>
  );
};

export default Accordion;
