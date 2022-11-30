import NotificationButton from "./componentes/NotificationButton";
import logo from "../../assets/img/logo.svg";
import './stylle.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/joaoVictorS">@joaoVictorS</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
