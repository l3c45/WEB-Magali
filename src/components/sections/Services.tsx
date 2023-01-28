import { FC } from "react";
import { services } from "../../data/services";

const Services: FC = () => {
  return (
    <section id="services" className="services__container">
      {services.map((item) => {
        return (
          <article key={item.id} >
            <h3>{item.title} </h3>
            <img alt={item.title} src={item.img}></img>
          </article>
        );
      })}
    </section>
  );
};

export default Services;
