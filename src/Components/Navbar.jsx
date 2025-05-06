import React from 'react';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><h4>FÊTE</h4></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="https://travelbuddya.my.canva.site/fete" target="_blank" rel="noopener noreferrer">
                  <h5>About</h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
