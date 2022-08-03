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
                <div className="col-lg-3">
                  <form action="#" className="subscribe mb-4 mb-lg-0">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <button>
                        <span className="icon-keyboard_backspace"></span>
                      </button>
                    </div>
                  </form>
                </div>
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
                      <a href="/">
                        <span className="icon-twitter">
                          <i className="fa fa-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="icon-instagram">
                          <i className="fa fa-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="icon-facebook">
                          <i className="fa fa-facebook" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="icon-pinterest">
                          <i className="fa fa-pinterest"></i>
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
                <a href="/" className="m-0 p-0">
                  News Prey
                </a>
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
