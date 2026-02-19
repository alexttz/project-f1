import "./DriverSelector.css";
import drivers from "../../lib/drivers.json";
import { formatDriverPath } from "../../lib/formatDriverPath";

// Enquanto mause está em cima da foto do piloto, seta hovered com nome dele
type Props = { setHovered: React.Dispatch<React.SetStateAction<string | null>>;};

export default function DriverSelector({ setHovered }: Props): JSX.Element {
  return (
    <div className="selector">
      {drivers.map((driver) => (
        <div key={driver.num}>
          <img src={`${formatDriverPath(driver.name)}`} alt={driver.name} onMouseEnter={() => setHovered(driver.name)} onMouseLeave={() => setHovered(null)}/>
        </div>
      ))}
    </div>
  );
}
