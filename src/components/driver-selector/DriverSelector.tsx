import "./DriverSelector.css";
import drivers from "../../lib/drivers.json";
import { getTeamColor } from "../../lib/teamColors";
import { formatDriverPath } from "../../lib/formatDriverPath";
import React from "react";

// Enquanto mause está em cima da foto do piloto, seta hovered com nome dele
type Props = {setHovered: React.Dispatch<React.SetStateAction<{ name: string; num: number; team: string } | null>>;};
type Driver = {setClicked: React.Dispatch<React.SetStateAction<{ name: string; num: number; team: string } | null>>;};

export default function DriverSelector({ setHovered, setClicked }: Props & Driver): JSX.Element {
  return (
    <div className="selector">
      {drivers.map((driver) => (
        <div className="cell" key={driver.num} style={{ ["--teamColor" as any]: getTeamColor(driver.team) }}>
          <img src={`${formatDriverPath(driver.name)}`} alt={driver.name} onMouseEnter={() => setHovered(driver)} onMouseLeave={() => setHovered(null)} onClick={() => setClicked(driver)} />
        </div>
      ))}
    </div>
  );
}
