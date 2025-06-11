import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
// import MagnifyingGlassIcon from "@/components/icons/MagnifyingGlassIcon";
import ButtonWithIconLeftFilledOutlined from "@/components/common/ButtonWithIconLeftFilledOutlined/ButtonWithIconLeftFilledOutlined";
import PhoneIcon from "@/components/icons/PhoneIcon";
// import ButtonFilledOutlined from "@/components/common/ButtonWithIconCenterFilledOutlined/ButtonWithIconCenterFilledOutlined";
import { BackgroundColors } from "@/constants/BackgroundColors";
import { OutlineColors } from "@/constants/OutlineColors";
import { Colors } from "@/constants/Colors";
import BarsIcon from "@/components/icons/BarsIcon";

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
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#servicos">Serviços</Link>
          {/* <Link href="/#produtos">Produtos</Link> */}
          <Link href="/#testemunhos">Depoimentos</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
        <div>
          {/* <Link href="/products/search">
            <ButtonFilledOutlined
              backgroundColor={BackgroundColors.WHITE}
              outlineColor={OutlineColors.GRAY}
            >
              <MagnifyingGlassIcon h={16} w={16} />
            </ButtonFilledOutlined>
          </Link> */}
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
        <div>
          <button>
            <BarsIcon h={24} w={24} color={Colors.BLACK} />
          </button>
          <aside>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/#servicos">Serviços</Link>
            {/* <Link href="/#produtos">Produtos</Link> */}
            <Link href="/#testemunhos">Depoimentos</Link>
            <Link href="/#contato">Contato</Link>
          </aside>
        </div>
      </div>
    </header>
  );
}
