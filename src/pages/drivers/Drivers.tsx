import "./Drivers.css";
import { useState } from "react";
import DriverSelector from "../../components/driver-selector/DriverSelector";
import { formatDriverPath } from "../../lib/formatDriverPath";

export default function Drivers(): JSX.Element {
  
  // Armazena qual piloto está selecionado
  const [hovered, setHovered] = useState<string | null>(null);

  return(
     <div className="drivers-page">

      <div className="content-area">
        {hovered && (<img src={formatDriverPath(hovered)} alt={hovered} />)}
        <div className="driver-name">
          {hovered ? hovered : ""}
        </div>
      </div>

      <div className="selector-area">
        <DriverSelector setHovered={setHovered} />
      </div>

    </div>
  )
}