import React from "react";
import profile from "./profile.jpeg";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="profile-picture">
        <img src={profile} alt="Your Name" />
      </div>
      <div className="introduction">
        <h1>Shaik Munawar</h1>
        <p>
          I am a passionate and experienced web developer with a strong
          foundation in web technologies. My journey in web development has
          equipped me with a wide range of skills and knowledge, enabling me to
          create effective, user-friendly, and visually appealing web
          applications. I have a profound understanding of web development from
          the front-end to the back-end, which allows me to design and build
          complete solutions.
        </p>
      </div>
    </div>
  );
}

export default Home;
