import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel  slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src="./Image1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block">
            <h5>Hi! I'm Pratik Satpathy</h5>
            <p>
              I am a software developer based out of India. I have expertise in
              multiple coding languages, libraries, packages and worked on
              different frameworks.
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="./Image2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block">
            <h5>My projects</h5>
            <p>
              I have made many projects which are available in github. Feel free
              to check them out!
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="./Image3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block">
            <h5>Gaming</h5>
            <p>
              This is a blog area where I will add the list of the top games I
              have played.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
