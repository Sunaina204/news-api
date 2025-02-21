"use client";
import { useState, useEffect } from "react";
import NavbarC from "./Navbar";
import Card from "./Card";

export default function Home() {
  const [articles, setarticles] = useState([{
    "source": {
      "id": null,
      "name": "Newser"
    },
    "author": "Rob Quinn",
    "title": "Thousands Rescued From Notorious Scam Compounds - Newser",
    "description": "Victims lured to Thailand with job offers were forced to work at scam centers in Myanmar",
    "url": "https://www.newser.com/story/364525/thousands-rescued-from-notorious-scam-compounds.html",
    "urlToImage": "https://img1-azrcdn.newser.com/image/1593738-12-20250219182902.jpeg",
    "publishedAt": "2025-02-20T08:15:03Z",
    "content": "Thai authorities launched a fresh crackdown on the centers last month after Chinese actor Wang Xing was abducted in Bangkok, where he had been promised a lucrative acting job, Reuters reports. He was… [+900 chars]"
  }]);

  const [category, setcategory] = useState("general");
  // console.log(process.env.DB);

  useEffect(() => {
    console.log("useeffecct is running");

    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8e31d0e7c02d4eab88089a82294a45e0`
    )
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
            <h1 className="text-center text-white">
              News - Top {category} Headlines
            </h1>
            {Array.isArray(articles) && articles.length !== 0 && 
  articles.map((item, index) => {
    return (
      <Card
        key={index}
        title={item.title || "No title available"}
        desc={item.description || "No description available"}
        img={item.urlToImage || "default_image.jpg"}
        url={item.url || "#"}
      />
    );
  })}

              
          </div>
        </div>
      </div>
    </>
  );
}
