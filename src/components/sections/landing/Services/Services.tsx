import P from "@/components/common/P/P";
import styles from "./Services.module.scss";
import SectionHeaderWithSubtitleBared from "@/components/blocks/SectionHeaderWithSubtitleBared/SectionHeaderWithSubtitleBared";
import CpuIcon from "@/components/icons/CpuIcon";
import { Colors } from "@/constants/Colors";
import PrinterIcon from "@/components/icons/PrinterIcon";
import WrenchIcon from "@/components/icons/WrenchIcon";
import AFilled from "@/components/common/AFilled/AFilled";
import { BackgroundColors } from "@/constants/BackgroundColors";
import { BackgroundHoverColors } from "@/constants/BackgroundHoverColors";
import { HoverColors } from "@/constants/HoverColors";

export default function Services() {
  return (
    <section className={styles.services}>
      <div>
        <SectionHeaderWithSubtitleBared
          title="Nossos Serviços"
          subtitle="Oferecemos uma variedade de serviços para atender às suas
              necessidades de informática."
        />
        <div>
          <div>
            <div>
              <CpuIcon h={32} w={32} color={Colors.WHITE} />
            </div>
            <h3>Venda de Equipamentos</h3>
            <P variation="primary">
              Computadores, notebooks, impressoras e periféricos das melhores
              marcas.
            </P>
          </div>
          <div>
            <div>
              <PrinterIcon h={32} w={32} color={Colors.WHITE} />
            </div>
            <h3>Suprimentos</h3>
            <P variation="primary">
              Toners, cartuchos, papéis e outros suprimentos para impressoras e
              equipamentos.
            </P>
          </div>
          <div>
            <div>
              <WrenchIcon h={32} w={32} color={Colors.WHITE} />
            </div>
            <h3>Manutenção</h3>
            <P variation="primary">
              Serviços de manutenção preventiva e corretiva para seus
              equipamentos.
            </P>
          </div>
        </div>
        <div>
          <AFilled
            backgroundColor={BackgroundColors.PRIMARY}
            backgroundHoverColor={BackgroundHoverColors.PRIMARYDARK}
            color={Colors.WHITE}
            hoverColor={HoverColors.WHITE}
            href="#"
          >
            Ver Todos os Serviços
          </AFilled>
        </div>
      </div>
    </section>
  );
}
