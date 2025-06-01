import StarIcon from "@/components/icons/StarIcon";
import styles from "./TestimonialCardOutlined.module.scss";
import { Colors } from "@/constants/Colors";
import P from "@/components/common/P/P";

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
        {Array.from({ length: rating }).map(() => (
          <StarIcon key={rating} h={20} w={20} color={Colors.YELLOW} />
        ))}
      </div>
      <P variation="primary">{`"${testimonial}"`}</P>
      <div>
        <p></p>
        <P variation="primary">{name}</P>
        <P variation="primary">{company}</P>
        <p></p>
      </div>
    </div>
  );
}
