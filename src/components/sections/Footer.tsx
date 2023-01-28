import { FC, useEffect, useRef, useState } from "react";
import useObserver from "../../hooks/useObserver";

const Footer: FC = () => {

  const footerRef = useRef(null);
  const observedElements = useObserver([footerRef]);

  return (
    <footer className="footer__container">
      <span
        data-ref="footer"
        ref={footerRef}
        className={observedElements.footer?.isInView ? "animate__animated animate__heartBeat" : ""}
      >

        Devloped by
        <a href="https://lucas-porfolio.vercel.app/" target={"_blank"}>
          Zarate Lucas
        </a>
      </span>
      <span> Copyright {new Date().getFullYear()} </span>
    </footer>
  );
};

export default Footer;
