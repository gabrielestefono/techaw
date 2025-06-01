import { Colors } from "@/enums/Colors.enum";

declare const __borderBrand: unique symbol;

export type BorderColorType = string & { [__borderBrand]: true };

function createBorderColor<T extends Record<string, string>>(
  colors: T
): Record<keyof T, BorderColorType> {
  return colors as unknown as Record<keyof T, BorderColorType>;
}

export const BorderColor = createBorderColor(
  Object.fromEntries(
    Object.entries(Colors).map(([key, value]) => [key, `${value}Border`])
  ) as Record<keyof typeof Colors, `${Colors}Border`>
);
