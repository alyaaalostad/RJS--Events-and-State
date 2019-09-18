import React from "react";

function WandsCard(props) {
  return (
    <div className="col-4 col-md-6 col-lf-12">
      <div className="card">
        <div className="card-body">
          <img className="card-img-top img-fluid" src={props.wands.imageUrl} />
          <h5 className="card-title">{props.wands.core}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{props.wands.core}</li>
          <li class="list-group-item">{props.wands.wood}</li>
          <li class="list-group-item">{props.wands.length}</li>
        </ul>
      </div>
    </div>
  );
}

export default WandsCard;
