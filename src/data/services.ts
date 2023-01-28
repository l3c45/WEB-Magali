import laser from "../assets/0.jpg";
import cera from "../assets/1.jpg";
import himfu from "../assets/2.jpg";
import bu from "../assets/4.jpeg";
import cl from "../assets/5.jpg";
import manicura from "../assets/6.jpg";
import pedicura from "../assets/7.jpg";
import vacum from "../assets/8.jpg";
import preso from "../assets/9.jpg";
import cosmetico from "../assets/10.jpg";
import pestaña from "../assets/11.jpg";
import facial from "../assets/12.jpg";

type Service = {
  id: number;
  title: string;
  img: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 0,
    title: "Depilación Laser",
    img: laser,
    description: "",
  },
  {
    id: 1,
    title: "Depilación con Cera",
    img: cera,
    description: "",
  },
  {
    id: 2,
    title: "Crioradiofrecuencia y HIMFU",
    img: himfu,
    description: "",
  },

  {
    id: 4,
    title: "Body Up Pro",
    img: bu,
    description: "",
  },
  {
    id: 5,
    title: "Criolipolisis",
    img: cl,
    description: "",
  },
  {
    id: 6,
    title: "Manicuria",
    img: manicura,
    description: "",
  },
  {
    id: 7,
    title: "Pedicuria",
    img: pedicura,
    description: "",
  },
  {
    id: 8,
    title: "Vacum-terapia",
    img: vacum,
    description: "",
  },
  {
    id: 9,
    title: "Presoterapia",
    img: preso,
    description: "",
  },
  {
    id: 10,
    title: "Cosmeticos",
    img: cosmetico,
    description: "",
  },
  {
    id: 11,
    title: "Pestañas",
    img: pestaña,
    description: "",
  },
  {
    id: 12,
    title: "Tratamientos Faciales",
    img: facial,
    description: "",
  },
];
