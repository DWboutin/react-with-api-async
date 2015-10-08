import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="green darken-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">ToolCreative</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Creatives</Link></li>
            <li><Link to="/create">Create</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}