import { NavLink } from "react-router-dom";

function linkClass({ isActive }: { isActive: boolean }) {
  return isActive ? "nav-link nav-link-active" : "nav-link";
}

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          F1 PROJECT
        </NavLink>

        <nav className="nav">
          <NavLink to="/#" className={linkClass}>
            #
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
