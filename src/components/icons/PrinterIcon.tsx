import { IconsInterface } from "@/interfaces/Icons";

export default function PrinterIcon({
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
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
      <rect x="6" y="14" width="12" height="8" rx="1"></rect>
    </svg>
  );
}
