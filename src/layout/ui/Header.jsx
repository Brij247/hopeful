import NavBar from "./NavBar";
import NavItem from "./NavItem";

function Header() {
  return (
    <div className="divide-y divide-slate-100">
      <NavBar>
        <NavItem href="/home" isActive>
          Home
        </NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </NavBar>
    </div>
  );
}

export default Header;
