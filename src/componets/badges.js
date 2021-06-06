import React from "react";
import confLogo from "../images/badge-header.svg";
import "./css/badges.css";
class Badges extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge__section-name">
          <img
            className="badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h3>
            Omar <br />
            Monges
          </h3>
        </div>
        <div className="badge__section-info">
          <p>Desarrollador web</p>
          <a href="https://twiter.com/Omar-Monges">@Omar-Monges</a>
        </div>
        <div className="badge__footer">
          <p>#platziConf</p>
        </div>
      </div>
    );
  }
}
export default Badges;
