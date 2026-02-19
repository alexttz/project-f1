import "./DriverSelector.css";

import drivers from "./drivers.json";

function formatDriverPath(name: string) {
  const normalized = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");

  return `${normalized}/${normalized}_profile.png`;
}

export default function DriverSelector(): JSX.Element {
  return (
    <div className="selector">
      {drivers.map((driver) => (
        <div key={driver.num}>
          <img src={`/drivers/${formatDriverPath(driver.name)}`} alt={driver.name}/>
        </div>
      ))}
    </div>
  );
}
