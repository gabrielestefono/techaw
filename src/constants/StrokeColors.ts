import { Colors } from "@/enums/Colors.enum";

declare const __strokeColorsBrand: unique symbol;

export type StrokeColorsType = string & { [__strokeColorsBrand]: true };

function createStrokeColors<T extends Record<string, string>>(
  colors: T
): Record<keyof T, StrokeColorsType> {
  return colors as unknown as Record<keyof T, StrokeColorsType>;
}

export const StrokeColors = createStrokeColors(
  Object.fromEntries(
    Object.entries(Colors).map(([key, value]) => [key, `${value}Stroke`])
  ) as Record<keyof typeof Colors, `${Colors}Stroke`>
);
