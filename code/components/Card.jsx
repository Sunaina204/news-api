'use client';
import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";


const Card = ({ title, desc, img, url}) => {
  return (
    <>
  
      <div className="col-sm-3">
        <div className="blog-1">
          <img
            src={img}
            alt="Description of the image"
            className="img1"
            style={{ width: "100%" }}
          />
          <div className="content-box">
          <h5> {title}</h5>
          <p>{desc}</p>
          <Button href={url} className="custom-btn"> Learn More</Button>
          </div>
        
        </div>
      </div>
      
    </>
  );
};

export default Card;
