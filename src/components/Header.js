import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header--image">
        <img id="p" alt="" />
      </div>
      <h2 className="header--title">Meme Generator</h2>
      <h3 className="header--project">Lets have fun !!</h3>
    </header>
  );
}
