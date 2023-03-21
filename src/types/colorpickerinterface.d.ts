export interface ColorPickerInterface {
  color: Color | null;
  onColorChange: Dispatch<SetStateAction<Color | null>>;
  colors: Color[];
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
}

export interface Color {
  hex: string;
  name: string;
}
