import { IconsInterface } from "@/interfaces/Icons";

export default function MagnifyingGlassIcon({
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
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  );
}
