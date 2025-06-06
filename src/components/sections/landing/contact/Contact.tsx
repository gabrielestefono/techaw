// import ContactForm from "@/components/form/ContactForm/ContactForm";
import styles from "./Contact.module.scss";
// import H3 from "@/components/common/H3/H3";
import H2 from "@/components/common/H2/H2";
import P from "@/components/common/P/P";
import MapPinIcon from "@/components/icons/MapPinIcon";
import { Colors } from "@/constants/Colors";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import AFilled from "@/components/common/AFilled/AFilled";
import { BackgroundColors } from "@/constants/BackgroundColors";
import { BackgroundHoverColors } from "@/constants/BackgroundHoverColors";
import { HoverColors } from "@/constants/HoverColors";

export default function Contact() {
  const whatsappNumber = "55619106-4220";
  const message = "Olá! Encontrei o seu website, preciso de ajuda!";
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${message}`;
  const InstagramLink = "https://www.instagram.com/haw_tec";
  return (
    <section className={styles.contact} id="contato">
      <div>
        <div>
          <div>
            <div>
              <H2 variant="secondary">Entre em Contato</H2>
              <P variation="secondary">
                Estamos prontos para atender às suas necessidades. Entre em
                contato conosco.
              </P>
            </div>
            <ul>
              <li>
                <div>
                  <MapPinIcon h={20} w={20} color={Colors.WHITE} />
                  <span>
                    QN 506 CONJUNTO 03 LOTE 02 - LOJA 04 SAMAMBAIA SUL-,
                    Brasília, Brazil 72312.003
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <PhoneIcon h={20} w={20} color={Colors.WHITE} />
                  <span>(61) 9-9106-4220</span>
                </div>
              </li>
              <li>
                <div>
                  <EmailIcon h={20} w={20} color={Colors.WHITE} />
                  <span>hawtec.vendas01@gmail.com</span>
                </div>
              </li>
              <li>
                <div>
                  <ClockIcon h={20} w={20} color={Colors.WHITE} />
                  <span>Segunda a Sexta: 8h às 18h | Sábado: 9h às 13h</span>
                </div>
              </li>
            </ul>
            <div>
              <AFilled
                backgroundColor={BackgroundColors.WHITE}
                backgroundHoverColor={BackgroundHoverColors.PRIMARY}
                hoverColor={HoverColors.WHITE}
                color={Colors.PRIMARY}
                href={whatsappLink}
                external
              >
                WhatsApp
              </AFilled>
              <AFilled
                backgroundColor={BackgroundColors.WHITE}
                backgroundHoverColor={BackgroundHoverColors.PRIMARY}
                hoverColor={HoverColors.WHITE}
                color={Colors.PRIMARY}
                href={InstagramLink}
                external
              >
                Instagram
              </AFilled>
              {/* <AFilled
                backgroundColor={BackgroundColors.WHITE}
                backgroundHoverColor={BackgroundHoverColors.PRIMARY}
                hoverColor={HoverColors.WHITE}
                color={Colors.PRIMARY}
                href="/"
              >
                Facebook
              </AFilled> */}
            </div>
          </div>
          {/* <div className="rounded-lg border bg-white p-6 shadow-sm text-gray-900">
            <H3>Envie uma Mensagem</H3>
            <ContactForm />
          </div> */}
        </div>
      </div>
    </section>
  );
}
