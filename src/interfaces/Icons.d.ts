import { ColorsType } from "@/constants/Colors";
import { FillColorsType } from "@/constants/FiLLColors";
import { StrokeColorsType } from "@/constants/StrokeColors";

export interface IconsInterface {
  w: number;
  h: number;
  color?: ColorsType;
  strokeColor?: StrokeColorsType;
  filledColor?: FillColorsType;
}
