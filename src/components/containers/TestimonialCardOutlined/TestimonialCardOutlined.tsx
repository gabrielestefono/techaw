import StarIcon from "@/components/icons/StarIcon";
import styles from "./TestimonialCardOutlined.module.scss";
import P from "@/components/common/P/P";
import { FillColors } from "@/constants/FillColors";
import { StrokeColors } from "@/constants/StrokeColors";

interface TestimonialCardOutlinedProps {
  name: string;
  company: string;
  testimonial: string;
  rating: number;
}

export default function TestimonialCardOutlined({
  name,
  company,
  testimonial,
  rating,
}: Readonly<TestimonialCardOutlinedProps>) {
  return (
    <div className={styles.testimonialCardOutlined}>
      <div>
        {Array.from({ length: 5 }).map((value, i) => (
          <StarIcon
            key={`${value}${i}`}
            h={20}
            w={20}
            filledColor={i + 1 > rating ? FillColors.WHITE : FillColors.YELLOW}
            strokeColor={i + 1 > rating ? StrokeColors.GRAYDARK : StrokeColors.YELLOW}
          />
        ))}
      </div>
      <P variation="primary">{`"${testimonial}"`}</P>
      <div>
        <P variation="terciary" weight="semi-bold">
          {name}
        </P>
        <P variation="quaternary">{company}</P>
      </div>
    </div>
  );
}
