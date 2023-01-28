import { FC } from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
const NavBar: FC = () => {
  return (
    <header className="navbar__header">
      <div className="navbar__logo"></div>

      <nav>
        <ul>
          <li ><a href="#home">Inicio</a></li>
          <li ><a href="#services">Servicios</a></li>
          <li ><a href="#about">Conocenos</a></li>
          <li ><a href="#reserve">Reservas</a></li>
        </ul>
      </nav>

      <div className="navbar__reserve">
        <a
          href="https://www.instagram.com/salon_de_belleza_magali"
          target={"_blank"}
        >
          <BsInstagram size={50} style={{ margin: "0 0" }} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=1164007946"
          target={"_blank"}
        >
          <BsWhatsapp size={50} style={{ margin: "0 30px" }} />
        </a>
      </div>
    </header>
  );
};

export default NavBar;
