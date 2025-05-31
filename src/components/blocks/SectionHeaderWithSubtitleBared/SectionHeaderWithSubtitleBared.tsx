import H2 from "@/components/common/H2/H2";
import styles from "./SectionHeaderWithSubtitleBared.module.scss";
import P from "@/components/common/P/P";

interface SectionHeaderWithSubtitleBaredProps {
  title: string;
  subtitle: string;
}

export default function SectionHeaderWithSubtitleBared({
  subtitle,
  title,
}: Readonly<SectionHeaderWithSubtitleBaredProps>) {
  return (
    <div className={styles.sectionHeaderWithSubtitleBared}>
      <div>
        <H2>{title}</H2>
        <P variation="subtitle">{subtitle}</P>
      </div>
    </div>
  );
}
