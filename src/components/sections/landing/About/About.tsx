import CpuIcon from "@/components/icons/CpuIcon";
import styles from "./About.module.scss";
import { Colors } from "@/constants/Colors";
import PrinterIcon from "@/components/icons/PrinterIcon";
import WrenchIcon from "@/components/icons/WrenchIcon";
import TruckIcon from "@/components/icons/TruckIcon";

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div>
        <div>
          <div>
            <h2>Sobre a Haw Tec</h2>
            <p>
              Somos uma empresa especializada em comércio e serviços de
              informática, oferecendo soluções completas para empresas e
              usuários domésticos.
            </p>
          </div>
        </div>
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
                  <p>
                    Oferecemos uma ampla gama de equipamentos de informática de
                    alta qualidade para atender às suas necessidades.
                  </p>
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
                  <p>
                    Toners, cartuchos, papéis e todos os suprimentos necessários
                    para manter seu negócio funcionando.
                  </p>
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
                  <p>
                    Serviços de manutenção preventiva e corretiva para garantir
                    o funcionamento ideal dos seus equipamentos.
                  </p>
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
