import { Colors } from "@/enums/Colors.enum";

declare const __BackgroundHoverColorsBrand: unique symbol;

export type BackgroundHoverColorsType = string & {
  [__BackgroundHoverColorsBrand]: true;
};

function createBackgroundHoverColors<T extends Record<string, string>>(
  colors: T
): Record<keyof T, BackgroundHoverColorsType> {
  return colors as unknown as Record<keyof T, BackgroundHoverColorsType>;
}

export const BackgroundHoverColors = createBackgroundHoverColors(
  Object.fromEntries(
    Object.entries(Colors).map(([key, value]) => [key, `${value}BgHover`])
  ) as Record<keyof typeof Colors, `${Colors}BgHover`>
);
