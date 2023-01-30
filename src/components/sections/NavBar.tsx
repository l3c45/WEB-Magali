import { FC } from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import useMenu from "../../hooks/useMenu";
import SideMenu from "../SideMenu";

const NavBar: FC = () => {
  const { isOpenMenu, handleMenu } = useMenu();

  return (
    <header>
      {isOpenMenu ? <SideMenu toggle={handleMenu}></SideMenu> : null}
      <nav
      role={"navigation"}
        style={{ display: `${isOpenMenu ? "none" : "flex"}` }}
        className="navbar__header animate__animated animate__fadeInDown "
      >
        <div className="navbar__logo"></div>
        <BiMenu role={"button"} onClick={handleMenu} className="navbar__menu" />

        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#about">Conocenos</a>
          </li>
          <li>
            <a href="#reserve">Reservas</a>
          </li>
        </ul>

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
      </nav>
    </header>
  );
};

export default NavBar;
