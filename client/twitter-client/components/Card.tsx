import * as React from "react";

type Cardtypes = {
  children: JSX.Element;
  width: number | string;
  height: number;
};

const Card: React.FC<Cardtypes> = (props): JSX.Element => {
  return (
    <div
      className="card"
      style={{
        width: props.width,
        height: props.height,
        boxShadow: "1px 1px 5px #e6e6e6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
