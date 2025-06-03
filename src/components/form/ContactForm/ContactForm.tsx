"use client";

import ButtonFilled from "@/components/common/ButtonFilled/ButtonFilled";
import styles from "./ContactForm.module.scss";
import { BackgroundColors } from "@/constants/BackgroundColors";
import { BackgroundHoverColors } from "@/constants/BackgroundHoverColors";
import { Colors } from "@/constants/Colors";
import { HoverColors } from "@/constants/HoverColors";

export default function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" placeholder="Seu nome" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Seu email" required />
      </div>
      <div>
        <label htmlFor="reason">Motivo do Contato</label>
        <select id="reason" required>
          <option value="">Selecione um motivo</option>
          <option value="partnership">Parceria (Terceirização)</option>
          <option value="warranty">Garantia</option>
          <option value="search">Busca</option>
          <option value="maintenance">Manutenção</option>
          <option value="update">Atualização</option>
          <option value="quote">Orçamento</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" placeholder="Sua mensagem" required />
      </div>
      <ButtonFilled
        backgroundColor={BackgroundColors.PRIMARY}
        backgroundHoverColor={BackgroundHoverColors.PRIMARYDARK}
        color={Colors.WHITE}
        hoverColor={HoverColors.WHITE}
        onClick={() => console.log("Funcionou!")}
      >Enviar Mensagem</ButtonFilled>
    </form>
  );
}
