import { IconsInterface } from "@/interfaces/Icons";

export default function BarsIcon({
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
