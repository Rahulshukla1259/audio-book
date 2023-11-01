import React, { useState } from "react";
import Header from "./AppComponents/Header";
import Card from "./AppComponents/Card";
import Footer from "./AppComponents/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  useParams

} from "react-router-dom";
import Comic_section from "./Components/Comic_section";
import Religious_books from "./Components/Religious_books";
import Poetry from "./Components/Poetry";
import Short_stories from "./Components/Short_stories";

import Self_help from "./Components/Self_help";

import Science_fiction from "./Components/Science_fiction";
import Layout from "./AppComponents/Layout";

import Ramayan from "./AppComponents/Ramayan";


export default function App() {
  let {userId}=useParams()
  return (
    <div className="app_div">
        <Header/>
      <div className="card_ka_contain">
        <Router>
          <Routes>
            
          <Route path="/" element={<Layout/>} />
            <Route path="/comics" element={<Comic_section />} />
            <Route path="/religious-books" element={<Religious_books />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/short-stories" element={<Short_stories />}></Route>
            <Route path="/self-help" element={<Self_help />}></Route>
            <Route
              path="/science-fiction"
              element={<Science_fiction />}
            ></Route>
            <Route path="/religious-books/ramayan" element={<Ramayan/>} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}
