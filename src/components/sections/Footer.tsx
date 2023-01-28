import { FC } from "react"

const Footer:FC = () => {
  return (
    <footer className='footer__container'>
      
      <span className='animate__animated animate__heartBeat'> Devloped by <a href='https://lucas-porfolio.vercel.app/' target={"_blank"} >Zarate Lucas</a> </span>
      <span> Copyright {new Date().getFullYear()} </span>
      
     </footer>
  )
}

export default Footer