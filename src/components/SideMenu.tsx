import { FC } from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import useMenu from "../hooks/useMenu";



const SideMenu:FC = () => {

    const {handleMenu}=useMenu()
    
  return (
    <div
       // style={{ display: `${isOpenMenu ? "inline" : "none"}` }}
        className="side__overlay animate_animated animate__slideInRight"
      >
        <aside className="side__sidemenu ">

        <h1> Magali</h1>

        <ul>
        
          <li>
            <a onClick={handleMenu} href="#services">Servicios</a>
          </li>
          <li>
            <a onClick={handleMenu} href="#about">Conocenos</a>
          </li>
          <li>
            <a  onClick={handleMenu} href="#reserve">Reservas</a>
          </li>
        </ul>

        <hr></hr>

        <div className="side__sidemenu-social">
          <a
            href="https://www.instagram.com/salon_de_belleza_magali"
            target={"_blank"}
          >
            <BsInstagram size={50} style={{ margin: " 30px" }} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=1164007946"
            target={"_blank"}
          >
            <BsWhatsapp size={50} style={{ margin: " 30px" }} />
          </a>
        </div>

        </aside>
      </div>
  )
}

export default SideMenu