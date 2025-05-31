import CpuIcon from "@/components/icons/CpuIcon";
import styles from "./About.module.scss";
import { Colors } from "@/constants/Colors";
import PrinterIcon from "@/components/icons/PrinterIcon";
import WrenchIcon from "@/components/icons/WrenchIcon";
import TruckIcon from "@/components/icons/TruckIcon";
import P from "@/components/common/P/P";
import SectionHeaderWithSubtitleBared from "@/components/blocks/SectionHeaderWithSubtitleBared/SectionHeaderWithSubtitleBared";

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div>
        <SectionHeaderWithSubtitleBared
          title="Sobre a Haw Tec"
          subtitle="Somos uma empresa especializada em comércio e serviços de
              informática, oferecendo soluções completas para empresas e
              usuários domésticos."
        />
        <div>
          <div>
            <ul>
              <li>
                <div>
                  <div>
                    <div>
                      <CpuIcon h={20} w={20} color={Colors.PRIMARY} />
                    </div>
                    <h3>Equipamentos</h3>
                  </div>
                  <P variation="primary">
                    Oferecemos uma ampla gama de equipamentos de informática de
                    alta qualidade para atender às suas necessidades.
                  </P>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <div>
                      <PrinterIcon h={20} w={20} color={Colors.PRIMARY} />
                    </div>
                    <h3>Suprimentos</h3>
                  </div>
                  <P variation="primary">
                    Toners, cartuchos, papéis e todos os suprimentos necessários
                    para manter seu negócio funcionando.
                  </P>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <div>
                      <WrenchIcon h={20} w={20} color={Colors.PRIMARY} />
                    </div>
                    <h3>Manutenção</h3>
                  </div>
                  <p></p>
                  <P variation="primary">
                    Serviços de manutenção preventiva e corretiva para garantir
                    o funcionamento ideal dos seus equipamentos.
                  </P>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <h3>Haw Tec</h3>
                  <p>Tecnologia e qualidade ao seu alcance</p>
                  <div>
                    <TruckIcon h={64} w={64} color={Colors.WHITE} />
                  </div>
                  <p>Entrega gratuita em Brasília - DF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
