import React from "react"
import { Container } from "./styles"
import klenia from "../../assets/klenia.jpeg"
import {  FaWhatsapp , FaInstagram , FaFacebook , FaTiktok } from "react-icons/fa";

export const Card : React.FC = () => {
  return (
    <Container>
      <div>
        <img src={klenia} alt="Klenia" />
        <h1> Klenia Maweze - KLENIA </h1>
      </div>

      <section>
       
         <a href="https://chat.whatsapp.com/GoHsvamjg7cLl1Y77nL18r" target="_blank">
         <FaWhatsapp />
          <p> WhatsApp</p>
         </a>
     
        <a href="https://www.instagram.com/kleniamaweze?igsh=MW0zYXg4dXlya3N1" target="_blank">
          <FaInstagram />
          <p> Instagram </p>
        </a>
        <a href="https://www.facebook.com/angelalorencodasilva.dasilva" target="_blank">
          <FaFacebook />
          <p> Facebook </p>
        </a>
        <a href="http://tiktok.com/@k.l.e.n.i.a" target="_blank" >
          <FaTiktok />
          <p> Tiktok</p>
        </a>
      </section>
    </Container>
  )
}