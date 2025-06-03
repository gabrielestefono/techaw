import { IconsInterface } from "@/interfaces/Icons";

export default function EmailIcon({
  h,
  w,
  color,
  filledColor,
  strokeColor,
}: Readonly<IconsInterface>) {
  const className = `w${w} h${h} ${color ?? ""} ${filledColor} ${strokeColor} flex-shrink-0`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}
