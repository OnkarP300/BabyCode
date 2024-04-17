import React from "react";
import "./home.scss";
import Sidebar from "./Sidebar";
import Prep from "./Prep";

export default function Home() {
  return (
    <div>
      <div className="discount">Get 50% discount on BabyCode membership</div>

      <div className="main-container">
        <Sidebar />
        <div className="home-container">
          <div className="user">
            <a href="#">
              <img src="/user.png" alt="" />
            </a>
          </div>
          <div className="progress">
            <div className="graph">
              <span>Your Progress Summary</span>
              <img src="/graph.png" alt="" />
            </div>

            <div className="save-lives">
              <h3>One Share can save many lives</h3>
              <p>
                Your one share can unlock a world of education for unprivileged.
              </p>
              <button>
                <a href="">Share App</a>
              </button>
            </div>
          </div>
          <Prep />
        </div>
      </div>
    </div>
  );
}
