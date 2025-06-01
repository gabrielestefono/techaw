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
import ServiceCardOutlined from "@/components/containers/ServiceCardOutlined/ServiceCardOutlined";

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
          <ServiceCardOutlined
            description="Computadores, notebooks, impressoras e periféricos das melhores
              marcas."
            icon={<CpuIcon h={32} w={32} color={Colors.WHITE} />}
            title="Venda de Equipamentos"
          />
          <ServiceCardOutlined
            description="Toners, cartuchos, papéis e outros suprimentos para impressoras e
              equipamentos."
            icon={<PrinterIcon h={32} w={32} color={Colors.WHITE} />}
            title="Suprimentos"
          />
          <ServiceCardOutlined
            description="Serviços de manutenção preventiva e corretiva para seus
              equipamentos."
            icon={<WrenchIcon h={32} w={32} color={Colors.WHITE} />}
            title="Manutenção"
          />
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
