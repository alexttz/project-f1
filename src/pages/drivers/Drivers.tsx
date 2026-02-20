import "./Drivers.css";
import { useState } from "react";
import DriverSelector from "../../components/driver-selector/DriverSelector";
import { formatDriverPath } from "../../lib/formatDriverPath";
import { getTeamColor } from "../../lib/teamColors";

export default function Drivers(): JSX.Element {
  
  // Armazena qual piloto está selecionado
  const [hovered, setHovered] = useState<{ name: string; num: number; team: string } | null>(null);
  const [clicked, setClicked] = useState<{ name: string; num: number; team: string } | null>(null);
  const [showBack, setShowBack] = useState(false);
  const active = clicked ?? hovered;

  return(
     <div className="drivers-page" style={{ ["--teamColor" as any]: getTeamColor(active?.team || "") }}>
        
        <div className="content-area">
          <div className="driver-number"> {active ? active.num : ""} </div>
          {active && (<img src={formatDriverPath(active.name)} alt={active.name} />)}
          <div className="driver-name"> {active ? active.name : ""} </div>
        </div>

      
        <div className={`selector-area ${clicked ? "slide-out" : ""}`} onTransitionEnd={(e) => {
            if (e.currentTarget !== e.target) return;
            if (clicked) setShowBack(true);
        }}>
          <DriverSelector setHovered={setHovered} setClicked={setClicked} />
        </div>

      {showBack && (
        <img src="deck.png" alt="back-button" className="back-button" onClick={() => {
            setShowBack(false); 
            setHovered(clicked);
            setClicked(null);   
        }}/>
      )}
    </div>
  )
}