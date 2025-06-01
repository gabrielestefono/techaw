import { Colors } from "@/enums/Colors.enum";

declare const __fillCollorsBrand: unique symbol;

export type FillColorsType = string & { [__fillCollorsBrand]: true };

function createFillColors<T extends Record<string, string>>(
  colors: T
): Record<keyof T, FillColorsType> {
  return colors as unknown as Record<keyof T, FillColorsType>;
}

export const FillColors = createFillColors(
  Object.fromEntries(
    Object.entries(Colors).map(([key, value]) => [key, `${value}Fill`])
  ) as Record<keyof typeof Colors, `${Colors}Fill`>
);
