import React from 'react';

const Main = () => {
  return (
    <div className="container">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/img1.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/img2.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/img3.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src="/images/img4.jpg" className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src="/images/img5.jpg" className="d-block w-100" alt="Slide 5" />
          </div>
          <div className="carousel-item">
            <img src="/images/img6.jpg" className="d-block w-100" alt="Slide 6" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Main;
