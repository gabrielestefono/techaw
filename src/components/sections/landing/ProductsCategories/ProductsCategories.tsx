import SectionHeaderWithSubtitleBared from "@/components/blocks/SectionHeaderWithSubtitleBared/SectionHeaderWithSubtitleBared";
import AFilled from "@/components/common/AFilled/AFilled";
import ProductCategoryCardOutlined from "@/components/containers/ProductCategoryCardOutlined/ProductCategoryCardOutlined";
import CpuIcon from "@/components/icons/CpuIcon";
import PrinterIcon from "@/components/icons/PrinterIcon";
import { BackgroundColors } from "@/constants/BackgroundColors";
import { BackgroundHoverColors } from "@/constants/BackgroundHoverColors";
import { Colors } from "@/constants/Colors";
import { HoverColors } from "@/constants/HoverColors";
import styles from "./ProductsCategories.module.scss";

export default function ProductsCategories() {
  return (
    <section className={styles.productsCategories}>
      <div>
        <SectionHeaderWithSubtitleBared
          subtitle="Explore nossa ampla gama de produtos de informática."
          title="Categorias de Produtos"
        />
        <div>
          <ProductCategoryCardOutlined
            title="Computadores"
            description="Desktops e notebooks para uso pessoal e empresarial"
            icon={<CpuIcon h={32} w={32} color={Colors.WHITE} />}
            // href="/products/computers"
          />
          <ProductCategoryCardOutlined
            title="Impressoras"
            description="Impressoras laser, jato de tinta e multifuncionais"
            icon={<PrinterIcon h={32} w={32} color={Colors.WHITE} />}
            // href="/products/printers"
          />
          <ProductCategoryCardOutlined
            title="Suprimentos"
            description="Toners, cartuchos e papéis para impressão"
            icon={<PrinterIcon h={32} w={32} color={Colors.WHITE} />}
            // href="/products/supplies"
          />
          <ProductCategoryCardOutlined
            title="Periféricos"
            description="Teclados, mouses, monitores e outros acessórios"
            icon={<CpuIcon h={32} w={32} color={Colors.WHITE} />}
            // href="/products/peripherals"
          />
          <ProductCategoryCardOutlined
            title="Redes"
            description="Roteadores, switches e equipamentos de rede"
            icon={<CpuIcon h={32} w={32} color={Colors.WHITE} />}
            // href="/products/networking"
          />
          <ProductCategoryCardOutlined
            title="Softwares"
            description="Sistemas operacionais, antivírus e aplicativos"
            icon={<CpuIcon h={32} w={32} color={Colors.WHITE} />}
            // href="/products/software"
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
            Ver Todos os Produtos
          </AFilled>
        </div>
      </div>
    </section>
  );
}
