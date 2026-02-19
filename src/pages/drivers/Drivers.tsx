import "./Drivers.css";
import DriverSelector from "../../components/driver-selector/DriverSelector";

export default function Drivers(): JSX.Element {
  return(
     <div className="drivers-page">
      <div className="content-area">
       
      </div>

      <div className="selector-area">
        <DriverSelector />
      </div>
    </div>
  )
}