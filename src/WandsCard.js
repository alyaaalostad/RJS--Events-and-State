import React from "react";

function WandsCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <img className="card-img-top" src={props.wands.imageUrl} />
          <h5 className="card-title">Core: {props.wands.core}</h5>
          <h5 className="card-title">Wood: {props.wands.wood}</h5>
          <h5 className="card-title">length: {props.wands.length}</h5>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default WandsCard;
