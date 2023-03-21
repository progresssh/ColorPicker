import { FormEvent, useState } from "react";
import { Color, ColorPickerInterface } from "./types/colorpickerinterface";

const ColorPicker = ({
  color,
  onColorChange,
  colors,
  setColors,
}: ColorPickerInterface) => {
  const [showColorGrid, setShowColorGrid] = useState(false);
  const [colorNameInput, setColorNameInput] = useState("");
  const [colorHexInput, setColorHexInput] = useState("");
  const regex = /[0-9A-Fa-f]{6}/g;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (colorHexInput.match(regex)) {
      setColors([...colors, { hex: colorHexInput, name: colorNameInput }]);
    } else {
      alert("please enter a valid regex");
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowColorGrid(!showColorGrid)}
        style={{ color: color?.hex }}
      >
        {showColorGrid ? "Hide ColorPicker" : "Show ColorPicker"}
      </button>
      {showColorGrid && (
        <div>
          <ul className="grid grid-flow-rows">
            {colors.map((color, i) => (
              <li
                onClick={() => onColorChange(color)}
                className="max-w-[24px]"
                key={i}
              >
                <svg width="24" height="24">
                  <rect width="24" height="24" fill={color.hex} />
                </svg>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Color Name"
              type={"text"}
              name="name"
              required
              value={colorNameInput}
              onChange={(e) => setColorNameInput(e.target.value)}
            />
            <input
              placeholder="Color Hex"
              type={"text"}
              name="hex"
              required
              value={colorHexInput}
              onChange={(e) => setColorHexInput(e.target.value)}
            />

            <button type="submit">Submit Color</button>
          </form>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [color, setColor] = useState<Color | null>(null);
  const [colors, setColors] = useState<Color[]>([
    { hex: "#FF0000", name: "red" },
    { hex: "#0000FF", name: "blue" },
    { hex: "#00FF00", name: "green" },
    { hex: "#FF00FF", name: "magenta" },
  ]);

  return (
    <div>
      <ColorPicker
        color={color}
        colors={colors}
        onColorChange={setColor}
        setColors={setColors}
      />
    </div>
  );
};

export default App;
