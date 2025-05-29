import { Colors } from "@/enums/Colors.enum";

declare const __backgroundColorBrand: unique symbol;

export type BackgroundColorsType = string & { [__backgroundColorBrand]: true };

function createBackgroundColors<T extends Record<string, string>>(
  colors: T
): Record<keyof T, BackgroundColorsType> {
  return colors as unknown as Record<keyof T, BackgroundColorsType>;
}

export const BackgroundColors = createBackgroundColors(
  Object.fromEntries(
    Object.entries(Colors).map(([key, value]) => [key, `${value}Bg`])
  ) as Record<keyof typeof Colors, `${Colors}Bg`>
);
