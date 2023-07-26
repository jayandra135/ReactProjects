import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const MyAccordComp = ({ question, answer }) => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className="question">
        <p onClick={() => setDisplay(!display)}>
          <AddCircleOutlineIcon />
        </p>
        <h1>{question}</h1>
      </div>
      {display && <p className="answer">{answer}</p>}
    </>
  );
};

export default MyAccordComp;
