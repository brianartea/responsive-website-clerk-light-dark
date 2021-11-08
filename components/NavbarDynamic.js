//import Link from 'next/link';
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import { navItems } from "./NavItems";

function NavbarDynamic() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Devs
          <Icons.BsFillLightningChargeFill />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavbarDynamic;
