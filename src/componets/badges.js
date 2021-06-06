import React from 'react'
import confLogo from '../images/badge-header.svg'
class Badges extends React.Component {
    render() {
        return (
            <div>
                <div className="header-card">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>
                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                    <h3>Omar <br />Monges</h3>
                </div>
                <div>
                    <p>Desarrollador web</p>
                    <a href="https://twiter.com/Omar-Monges">@Omar-Monges</a>
                </div>
                <div>
                    <p>#platziConf</p>
                </div>
            </div>
        )
    }
}
export default Badges