import React from "react";
import Navbar from "../componets/Navbar";
import Badges from "../componets/badges";
import header from "../images/badge-header.svg";
import "./styles/badgeNew.css";
import "./styles/badgeNew.css";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badges
                firstName="Omar"
                lastName="Monges"
                avatarUrl="https://i.imgur.com/Gp5UmAZ.jpg"
                twiter="Omar-Monges"
                jobTitle="Web Development"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
