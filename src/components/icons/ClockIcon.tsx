import { IconsInterface } from "@/interfaces/Icons";

export default function ClockIcon({
  h,
  w,
  color,
  filledColor,
  strokeColor,
}: Readonly<IconsInterface>) {
  const className = `w${w} h${h} ${color ?? ""} ${filledColor} ${strokeColor}`;
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
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}
