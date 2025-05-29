import { Colors } from "@/enums/Colors.enum";

declare const __OutlineColorsBrand: unique symbol;

export type OutlineColorsType = string & {
  [__OutlineColorsBrand]: true;
};

function createOutlineColors<T extends Record<string, string>>(
  colors: T
): Record<keyof T, OutlineColorsType> {
  return colors as unknown as Record<keyof T, OutlineColorsType>;
}

export const OutlineColors = createOutlineColors(
  Object.fromEntries(
    Object.entries(Colors).map(([key, value]) => [key, `${value}Hover`])
  ) as Record<keyof typeof Colors, `${Colors}Hover`>
);
