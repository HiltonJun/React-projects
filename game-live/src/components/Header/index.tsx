import logo from "../../assets/img/game-live-logo-white.png";
import logout from "../../assets/icons/switch.png";
import avatar from "../../assets/img/avatar-user-1.jpg";
import "./style.css";

const Header = () => {
  return (
    <header>
        <img className="nav-logo" src={logo} alt="logo da game-live" />
      <div className="nav-btns">
        <h2>Favoritos</h2>
        <h2>Gêneros</h2>
      </div>
      <div className="nav-profile">
        <img id="nav-avatar"src={avatar} alt="imagem de perfil do usuário" />
        <img id="nav-logout" src={logout} alt="imagem de logout" />
      </div>
    </header>
  );
};

export default Header;
