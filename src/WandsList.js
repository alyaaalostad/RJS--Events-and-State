import React from "react";
import WandsCard from "./WandsCard";

function WandsList(props) {
  let theList = props.wands.map(item => (
    <WandsCard wands={item} key={item.core} />
  ));
  return <div className="row">{theList}</div>;
}

export default WandsList;
