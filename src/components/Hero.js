import React from "react";
import logo from "../imgs/djangounchainedbnr.jpg";
function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-movie-title">Django Unchained</div>
      <div className="hero-container">
        <div className="hero-movie-picture">
          <img src={logo} alt="movie" />
        </div>
        <div className="hero-movie-details">
          <div className="hero-movie-summary-wrapper">
            <div className="hero-movie-summary">
              With the help of a German bounty-hunter, a freed slave sets out to
              rescue his wife from a brutal plantation owner in Mississippi.
            </div>
            <div className="hero-movie-tags">
              <ul className="hero-movie-tags-ul">
                <li>Drama</li>
                <li>Western</li>
              </ul>
            </div>
          </div>
          <div className="hero-movie-indepth-details">
            <div className="hero-movie-director">
              <ul className="hero-movie-director-ul">
                <li>Quentin Tarantino</li>
              </ul>
            </div>
            <div className="hero-movie-stars">
              <ul className="hero-movie-stars-ul">
                <li>Jamie Foxx</li>
                <li>Christoph Waltz</li>
                <li>Leonardo DiCaprio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
