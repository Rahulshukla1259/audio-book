import React from "react";

export default function Card({type,img}) {
  return <div style={{margin:"15px"}}>
     <div class="w3-card-4 card">
    <div className="img_cont">
      <img src={img} alt="" />
      <div className="grad_maker"> <h1>{type}</h1></div>
    </div>
    <div className="desc">
      <h1>bok mane</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
</div>
  </div>;
}
