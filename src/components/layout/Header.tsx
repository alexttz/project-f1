import { NavLink } from "react-router-dom";

function linkClass({ isActive }: { isActive: boolean }) {
  return isActive ? "nav-link nav-link-active" : "nav-link";
}

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <img src="/public/logo.png" alt="F1 Stats Logo" className="logo" />
        </NavLink>

        <nav className="nav">
          <NavLink to="/drivers" className={linkClass}>
            Drivers
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
