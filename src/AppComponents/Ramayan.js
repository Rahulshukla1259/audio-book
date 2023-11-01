import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Book() {
  let [bookdata, setbookdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://rahulshukla1259.github.io/ramayan-book-json/json")
      .then((response) => {
        setbookdata(response.data);

        console.log(bookdata);
      });
  }, []);
  let handleListen = () => {
    let spans = document.querySelector(".ramayan");

    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(
        "hi Rahul shukla ,how are you "
      );

     

      speechSynthesis.speak(utterance);
    }
  };
  return (
    <div className="ram_cont">
      <div className="ramayan">
        {bookdata.map((page) => (
          <span>{page.page}</span>
        ))}
      </div>

      <button onClick={handleListen} className="listen">
        Listen
      </button>
    </div>
  );
}
