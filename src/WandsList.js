import React from "react";
import WandsCard from "./WandsCard";

function WandsList(props) {
  let theList = props.wands.map(item => (
    <WandsCard wands={item} key={item.core} />
  ));
  return (
    <div className="container">
      <div className="row">{theList}</div>
    </div>
  );
}

export default WandsList;
