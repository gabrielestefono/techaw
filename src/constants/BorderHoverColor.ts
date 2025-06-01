import { Colors } from "@/enums/Colors.enum";

declare const __borderHoverBrand: unique symbol;

export type BorderHoverColorType = string & { [__borderHoverBrand]: true };

function createBorderHoverColor<T extends Record<string, string>>(
  colors: T
): Record<keyof T, BorderHoverColorType> {
  return colors as unknown as Record<keyof T, BorderHoverColorType>;
}

export const BorderHoverColor = createBorderHoverColor(
  Object.fromEntries(
    Object.entries(Colors).map(([key, value]) => [key, `${value}BorderHover`])
  ) as Record<keyof typeof Colors, `${Colors}BorderHover`>
);
