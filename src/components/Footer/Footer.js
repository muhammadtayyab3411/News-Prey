import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ marginTop: "3rem" }}>
        <footer className="footer-59391">
          <div className="border-bottom pb-5 mb-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 text-lg-center">
                  <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                    <li>
                      <Link to="/business">Business</Link>
                    </li>
                    <li>
                      <Link to="/entertainment">Entertainment</Link>
                    </li>
                    <li>
                      <Link to="/technology">Technology</Link>
                    </li>
                    <li>
                      <Link to="/sports">Sports</Link>
                      <Outlet />
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul className="list-unstyled nav-links social nav-right text-lg-right">
                    <li>
                      <a
                        rel="noreferrer"
                        href="https://twitter.com/Tayyab_3411"
                        target={"_blank"}
                      >
                        <span className="icon-twitter">
                          <i className="fa fa-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        href="https://instagram.com/muhammadtayyab_3411"
                        target={"_blank"}
                      >
                        <span className="icon-instagram">
                          <i className="fa fa-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        href="https://facebook.com/muhammadtayyab3411"
                        target={"_blank"}
                      >
                        <span className="icon-facebook">
                          <i className="fa fa-facebook" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/muhammad-tayyab-a12258228/"
                        target={"_blank"}
                      >
                        <span className="icon-linkedin">
                          <i className="fa fa-linkedin"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
                <Link to="/" className="m-0 p-0">
                  News Prey
                </Link>
              </div>
              <div className="col-lg-4 text-lg-right order-3 order-lg-3">
                <p className="m-0 text-muted">
                  <small>&copy; 2022. All Rights Reserved.</small>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
