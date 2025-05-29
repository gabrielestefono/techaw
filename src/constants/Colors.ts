import { Colors as ColorsEnum } from "@/enums/Colors.enum";

declare const __ColorsBrand: unique symbol;

export type ColorsType = string & {
  [__ColorsBrand]: true;
};

function createColors<T extends Record<string, string>>(
  colors: T
): Record<keyof T, ColorsType> {
  return colors as unknown as Record<keyof T, ColorsType>;
}

export const Colors = createColors(
  Object.fromEntries(
    Object.entries(ColorsEnum).map(([key, value]) => [key, `${value}`])
  ) as Record<keyof typeof ColorsEnum, `${ColorsEnum}`>
);
