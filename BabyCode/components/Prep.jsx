import React from "react";
import "./prep.scss";

export default function Prep() {
  // Services cards
  const items = [
    {
      name: "Speaking",
      img: "/speaking.png",
    },
    {
      name: "Listening",
      img: "/listening.png",
    },
    {
      name: "Reading",
      img: "/reading.png",
    },
    {
      name: "Writing",
      img: "/writing.png",
    },
    {
      name: "Vocabulary",
      img: "/vocabulary.png",
    },
    {
      name: "Classes",
      img: "/classes.png",
    },
    {
      name: "Book IELTS Exam",
      img: "/IELTS.png",
    },
    {
      name: "Student News",
      img: "/news.png",
    },
  ];

  return (
    <div className="prep-container">
      <div className="prepare">
        <span>Prepare with ease</span>
        <div className="item-container">
          {items.map((item) => (
            <div key={item} className="item">
              <img src={item.img} alt="" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Youtube and Mock test cards */}
      <div className="cards">
        <div className="app">
          <img src="/youtube (8) 1.png" alt="" />
          <span>App Guide Video</span>
        </div>
        <div className="test">
          <h3>Practice Mock Test</h3>
          <p>
            Get the authentic IELTS exam experience with all four modules
            covered!
          </p>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
}
