import React from "react";

import {Link,Outlet} from "react-router-dom";

import Card from "./Card";

export default function Layout() {
  return <div>
      
      <Link to="/comics">
          <Card 
              type="Comics"
              img="https://images3.alphacoders.com/100/thumb-1920-1005136.jpg"
            />
          </Link>
          <Link to="/religious-books">
          <Card 
              type="Religion"
              img="http://2.bp.blogspot.com/-rDnrfFHXOAo/UCQGOyaJmKI/AAAAAAAABC8/Qj98L9KZqgs/s1600/11.jpg"
            />
          </Link>
          <Link to="/self-help">
          <Card 
              type="Self-help"
              img="https://balancedachievement.com/wp-content/uploads/2016/12/Top-10-Self-Help-Books-2016.jpg"
            />
          </Link>

          <Link to="short-stories">
          <Card 
              type="Short-stories"
              img="https://ebookfriendly.com/wp-content/uploads/2014/10/Best-short-stories-for-children.jpg"
            />
          </Link>

          <Link to="science-fiction">
          <Card 
              type="Science-fiction"
              img="http://wallup.net/wp-content/uploads/2017/03/29/483426-science_fiction-spaceship-Star_Citizen.jpg"
            />
          </Link>

          <Link to="poetry">
            
          <Card 
              type="Poetry"
              img="https://tse4.mm.bing.net/th?id=OIP.WdRAqw_39G92yrp4kLNv6QHaEK&pid=Api&P=0&h=180"
            />
          </Link>

          <Outlet />
  </div>;
}
