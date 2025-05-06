import React from 'react';

const Footer = () => {
  return (
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
      <div className="col mb-3">
        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Brand">
          <img src="./images/logo.jpg" alt="Your Logo" width="75" height="75" className="me-2" />
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlinkHref="#bootstrap" />
          </svg>
        </a>
        <p className="text-body-secondary">© 2025</p>
      </div>

      <div className="col mb-3"></div>

      {[1, 2, 3].map((item) => (
        <div className="col mb-3" key={item}>
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">About</a>
            </li>
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
