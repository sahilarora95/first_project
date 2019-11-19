import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                Website Name
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/state">State</a>
              </li>
              <li>
                <a href="/district">District</a>
              </li>
              <li>
                <a href="/child">Child</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
