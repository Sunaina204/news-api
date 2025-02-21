'use client';
import Image from "next/image";

import { useState, useEffect } from "react";
import NavbarC from "./Navbar";
import Card from "./Card";

export default function Home() {
  const [articles, setarticles] = useState([]);

 const[category, setcategory] = useState('general');
// console.log(process.env.DB);

  useEffect(() => {
    console.log('useeffecct is running');
    
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8e31d0e7c02d4eab88089a82294a45e0`)
      .then((data) => data.json())
      .then((result) => setarticles(result.articles))
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  // console.log(category);


  return (
    <>
    <NavbarC category={setcategory} />
    <div className="bgcolor">
    <div className="container">
      <div className="row">
      <h1 className="text-center text-white">News - Top {category} Headlines</h1>
        {articles.map((item, index) => {
          return (
            
  
            <Card
              key={index}
              title={item.title}
              desc={item.description}
              img={item.urlToImage}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
    </div>
  </>
  );
}
