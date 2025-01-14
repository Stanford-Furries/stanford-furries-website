import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isPride, setIsPride] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-icons">
        <svg
          className="hamburger-menu"
          width="32px"
          height="32px"
          onClick={() => {
            const navbarLinks = document.getElementById("navbar-links");
            navbarLinks.classList.toggle("active");
          }}
        >
          <path
            fill="white"
            d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
          />
        </svg>
        <img
          onClick={() => setIsPride(!isPride)}
          src={isPride ? "./fas-logo-pride.png" : "./fas-logo-new.png"}
          alt="FAS Logo"
        />
      </div>
      <div className="navbar-links" id="navbar-links">
        <a target="#" href="https://twitter.com/stanfordfurries">
          Twitter
          <img
            className="navbar-ext-icon"
            src="./ext-link-icon.png"
            alt="External link icon"
          />
        </a>
        <a target="#" href="https://www.instagram.com/stanfordfurries">
          Instagram
          <img
            className="navbar-ext-icon"
            src="./ext-link-icon.png"
            alt="External link icon"
          />
        </a>
        <a target="#" href="https://t.me/stanfordfurries">
          Telegram
          <img
            className="navbar-ext-icon"
            src="./ext-link-icon.png"
            alt="External link icon"
          />
        </a>
        <a
          target="#"
          href="https://bsky.app/profile/stanfordfurries.bsky.social"
        >
          Bluesky
          <img
            className="navbar-ext-icon"
            src="./ext-link-icon.png"
            alt="External link icon"
          />
        </a>
        <a target="#" href="https://forms.gle/K7eRA3LmsCuM7eDG7">
          Mailing List
          <img
            className="navbar-ext-icon"
            src="./ext-link-icon.png"
            alt="External link icon"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
