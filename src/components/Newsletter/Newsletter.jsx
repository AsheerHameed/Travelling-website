import React from "react";
import "./Newsletter.css";
import { mail, decor_news1, decor_news2, decor_news3, sendNews } from './imports'
const Newsletter = () => {
  return (
    <div className="conatiner_wrapper">
      <img className="decor1" src={decor_news1} alt="decor_news1" />
      <img className="decor2" src={decor_news2} alt="decor_news2" />
      <img className="decor3" src={decor_news3} alt="decor_news3" />
      <img className="sent" src={sendNews} alt="sendNews" />
      <div className="container">
        <div className="flex_center">
          <h1>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h1>
        </div>
        <div className="input flex_center">
          <img src={mail} alt="mail" />
          <input type="email" placeholder="Your email" />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
