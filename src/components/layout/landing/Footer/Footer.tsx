import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <Image
            src="/images/logo.png"
            alt="Haw Tec Logo"
            width={40}
            height={40}
          />
          <span>Haw Tec</span>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Haw Tec. Todos os direitos
          reservados.
        </p>
        <div>
          <Link href="/terms">Termos</Link>
          <Link href="/privacy">Privacidade</Link>
        </div>
      </div>

      <div className={styles.credits}>
        <span>Desenvolvido por</span>
        <a
          href="https://gabrielestefono.com.br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site do Gabriel Estefôno"
        >
          <Image
            src="/images/gabrielestefono-logo.svg"
            alt="Gabriel Estefôno"
            width={100}
            height={24}
          />
        </a>
      </div>
    </footer>
  );
}
