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
    function speak(i) {
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(spans.children[i].textContent);
        utterance.lang="hi-IN"

        utterance.onstart=()=>{
        
          spans.children[i].style.color="red"

        }
        speechSynthesis.speak(utterance);

        utterance.onend=()=>{

          if(i+1<spans.children.length){

            speak(i+1)
          }
        }
      }
    }
    speak(0)
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
