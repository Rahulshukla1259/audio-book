import React from "react";

import {useNavigate,useParams} from "react-router-dom";


export default function Book_card({name,url}) {
  
    
    let navigate= useNavigate()
  return <>
   
   <div className="all_books">
     <div onClick={()=>{name==="Ramayan"?
     navigate(`/religious-books/ramayan`):navigate(`/religious-books`)}} className="book w3-card-2">
     
       <div className="cover_page">

        <img src={url} alt="" />
        <div className="shad"><p>free</p></div>
       </div>
       <div className="book_detail"><h5>{name}</h5></div>
     </div>
     </div>
  </>;
}
