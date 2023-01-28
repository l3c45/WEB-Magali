import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { FC, useRef } from "react";
import useObserver from "../../hooks/useObserver";

const Contact:FC = () => {

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const observedElements = useObserver([leftRef,rightRef]);
  
  return (
    <section id="reserve" className="contact__container">
      <h3>Reserva tu turno!</h3>
      <div className="contact__reserve">
        <a
          href="https://www.instagram.com/salon_de_belleza_magali"
          target={"_blank"}
        >
          <BsInstagram size={50} style={{ margin: "0 30px" }} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=1164007946"
          target={"_blank"}
        >
        
          <BsWhatsapp size={50} style={{ margin: "0 30px" }} />
        </a>
      </div>

      <div className="contact__bottom">
        <h4>Donde nos podes encontrar ?</h4>
        <div className="contact__contact">
          <iframe

          data-ref="left"
          ref={leftRef}
          className={observedElements.left?.isInView?"animate__animated animate__slideInLeft " :""}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.947560127187!2d-58.703766764373015!3d-34.47885454010155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca3bb8d406d17%3A0xdcebbecb9d240389!2sSal%C3%B3n%20de%20Belleza%20magali!5e0!3m2!1ses!2sar!4v1674861939552!5m2!1ses!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div 
          data-ref="right"
               ref={rightRef}
               className={observedElements.left?.isInView?"animate__animated animate__slideInRight " :""}
          
          >
            <span>
              <BsInstagram />
              <a
                href="https://www.instagram.com/salon_de_belleza_magali"
                target={"_blank"}
              >
                {" "}
                @salon_de_belleza_magali
              </a>
            </span>
            <span>
              <BsFacebook />{" "}
              <a href="" target={"_blank"}>
                Salon_de_belleza_magali{" "}
              </a>
            </span>
            <span>
              <BsWhatsapp />{" "}
              <a
                href="https://api.whatsapp.com/send?phone=1164007946"
                target={"_blank"}
              >
                1164007946
              </a>
            </span>
            <span>
              <BiLocationPlus />{" "}
              <a href="https://goo.gl/maps/c3kAGShgD3sNn4xB6" target={"_blank"}>
                {" "}
                Av. Olivos 963 , Pablo Nogues{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
