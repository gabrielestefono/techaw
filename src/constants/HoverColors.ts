import { Colors } from "@/enums/Colors.enum";

declare const __HoverColorsBrand: unique symbol;

export type HoverColorsType = string & {
  [__HoverColorsBrand]: true;
};

function createHoverColors<T extends Record<string, string>>(
  colors: T
): Record<keyof T, HoverColorsType> {
  return colors as unknown as Record<keyof T, HoverColorsType>;
}

export const HoverColors = createHoverColors(
  Object.fromEntries(
    Object.entries(Colors).map(([key, value]) => [key, `${value}Hover`])
  ) as Record<keyof typeof Colors, `${Colors}Hover`>
);
