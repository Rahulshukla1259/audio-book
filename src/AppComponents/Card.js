import React from "react";

export default function Card({type,img}) {
 
  return <div  style={{margin:"15px"}}>
     <div class="w3-card-4 card">
    <div className="img_cont">
      <img src={img} alt="" />
      <div className="grad_maker"></div>
    </div>
    <div className="desc">
      <h4>{type}</h4>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
</div>
  </div>;
}
