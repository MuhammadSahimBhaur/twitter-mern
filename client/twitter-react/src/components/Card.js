import * as React from "react";


const Card = (props) => {
    return (
      <div
        style={{
          width: "min-content",
          height: "min-height",
          borderWidth: "0.1px",
          borderColor: "black",
          border:"solid",
          padding: 10,
          margin: 10,
        }}
      >
        {props.children}
      </div>
    );
  };
  
  export default Card;
  