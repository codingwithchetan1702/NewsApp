import React from "react";
import image from '../assets/News.jpeg'

const NewsItem = ({ title, desc, src, url }) => {
  return (
    <>
      <div className="card mb-3 d-inline-block my-3 mx-3" style={{ maxWidth: "345px" }}>
        <img src={src?src:image} style={{ height:"200px", width:"360px"}} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{desc?desc.slice(0,90):"News is a report or information about recent events, situations, or people and things that are considered interesting or important"}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>  
  );
};

export default NewsItem;
