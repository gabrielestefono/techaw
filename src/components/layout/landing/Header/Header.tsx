import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import MagnifyingGlassIcon from "@/components/icons/MagnifyingGlassIcon";
import { BackgroundColors } from "@/enums/BackgroundColors.enum";
import { OutlineColors } from "@/enums/OutlineColors.enum";
import ButtonWithIconLeftFilledOutlined from "@/components/common/ButtonWithIconLeftFilledOutlined/ButtonWithIconLeftFilledOutlined";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { Colors } from "@/enums/Colors.enum";
import ButtonFilledOutlined from "@/components/common/ButtonWithIconCenterFilledOutlined/ButtonWithIconCenterFilledOutlined";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Haw Tec Logo"
              width={50}
              height={50}
            />
            <span>Haw Tec</span>
          </Link>
        </div>
        <nav>
          <Link href="/about">Sobre</Link>
          <Link href="/services">Serviços</Link>
          <Link href="/products">Produtos</Link>
          <Link href="/#testimonials">Depoimentos</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
        <div>
          <Link href="/products/search">
            <ButtonFilledOutlined
              backgroundColor={BackgroundColors.WHITE}
              outlineColor={OutlineColors.GRAY}
            >
              <MagnifyingGlassIcon h={16} w={16} />
            </ButtonFilledOutlined>
          </Link>
          <Link href="/#contato">
            <ButtonWithIconLeftFilledOutlined
              backgroundColor={BackgroundColors.PRIMARY}
              outlineColor={OutlineColors.WHITE}
              color={Colors.WHITE}
              icon={<PhoneIcon h={16} w={16} color={Colors.WHITE} />}
            >
              Contato
            </ButtonWithIconLeftFilledOutlined>
          </Link>
        </div>
      </div>
    </header>
  );
}
