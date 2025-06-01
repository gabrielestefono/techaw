import Image from "next/image";
import styles from "./HeroSection.module.scss";
import AFilled from "../common/AFilled/AFilled";
import { BackgroundColors } from "@/constants/BackgroundColors";
import { BackgroundHoverColors } from "@/constants/BackgroundHoverColors";
import { HoverColors } from "@/constants/HoverColors";
import { Colors } from "@/constants/Colors";
import H1 from "../common/H1/H1";
import P from "../common/P/P";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div>
        <div>
          <div>
            <div>
              <H1>Soluções em Informática para o seu Negócio</H1>
              <div>
                <P variation="section-subtitle">
                  Equipamentos, suprimentos e manutenção com entrega gratuita em
                  Brasília - DF
                </P>
              </div>
            </div>
            <div>
              <AFilled
                href="/services"
                backgroundColor={BackgroundColors.WHITE}
                backgroundHoverColor={BackgroundHoverColors.PRIMARY}
                color={Colors.PRIMARY}
                hoverColor={HoverColors.WHITE}
              >
                Nossos Serviços
              </AFilled>
              <AFilled
                href="/#contato"
                backgroundColor={BackgroundColors.WHITE}
                backgroundHoverColor={BackgroundHoverColors.PRIMARY}
                color={Colors.PRIMARY}
                hoverColor={HoverColors.WHITE}
              >
                Fale Conosco
              </AFilled>
            </div>
          </div>
          <div>
            <div className="relative w-[300px] h-[300px] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <Image
                src="/images/logo.png"
                alt="Haw Tec Logo"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
