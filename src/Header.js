import React, { useState } from "react";

export default function Mob() {
  

  return (
    <>
      <nav
        class="w3-sidebar w3-bar-block w3-card"
        id="mySidebar"
        style={{display:"none"}}
      >
        <div class="w3-container w3-theme-d2">
          <span
            onClick={() => {
              document.getElementById("mySidebar").style.display = "none";
            }}
            class="w3-button w3-display-topright w3-large"
          >
            X
          </span>
          <br />
          <div class="w3-padding w3-center">
            <img
              class="w3-circle"
              src="https://tse4.mm.bing.net/th?id=OIP.swTHsOF1F5TAXKRNlM6kegHaEK&pid=Api&P=0&h=180"
              alt="avatar"
              style={{ width: "50%" }}
            />
          </div>
        </div>
        <a class="w3-bar-item w3-button" href="#">
          Your Books
        </a>
        <a class="w3-bar-item w3-button" href="#">
          Purchase Books
        </a>
        <a class="w3-bar-item w3-button" href="#">
          Contact Us
        </a>
      </nav>

      <header class="w3-bar w3-card w3-theme header">
        <button
          class="w3-bar-item w3-button w3-xxlarge w3-hover-theme"
          onClick={() => {
            document.getElementById("mySidebar").style.display = "block";
          }}
        >
          &#9776;
        </button>
        <h1 class="w3-bar-item w3-xxlarge">EBOOKS</h1>
      </header>    
    </>
  );
}
