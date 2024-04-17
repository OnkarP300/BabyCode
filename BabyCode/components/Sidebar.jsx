import React from "react";
import "./sidebar.scss";

export default function Sidebar() {
  const items = [
    {
      name: "Home",
      img: "home.png",
    },
    {
      name: "Community",
      img: "Users.png",
    },
    {
      name: "Stories",
      img: "stories.png",
    },
    {
      name: "Shop",
      img: "Storefront.png",
    },
    {
      name: "Feedback",
      img: "message-square.png",
    },
  ];

  return (
    <div>
      <div className="sidebar-container">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <span>BabyCode</span>
        </div>

        <div className="links">
          {items.map((item) => (
            <a href={`#${item.name}`} key={item.name}>
              <img src={`/${item.img}`} alt="" />
              {item.name}
            </a>
          ))}
        </div>
        <div className="log">
          <img src="/log.png" alt="" />
          <a href="">Logout</a>
        </div>

        <div className="add">
          <h2>Explore premium features with ease!</h2>
          <ul>
            <li>
              <img src="check.png" alt="" />
              Unlimited Speaking Test Access
            </li>
            <li>
              <img src="check.png" alt="" />
              Unlimited Writing Test Access
            </li>
            <li>
              <img src="check.png" alt="" />
              Analyze Your Answer
            </li>
            <li>
              <img src="check.png" alt="" />
              Check Band Score
            </li>
          </ul>
          <div className="buy">
            <h6>Only @ &#x20B9; 299</h6>

            <button>
              <a href="">
                Buy Now <img src="/ArrowCircleRight (1).png" alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
