import { NavLink } from "./NavLink";
import { navLinks } from "../constants";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const xIcon = "../public/icons/x.svg";
  const menuIcon = "../public/icons/menu-deep.svg";

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav className="w-1/3 flex justify-end">
      <div className="hidden text-white p-4 md:flex items-center justify-between">
        <ul className="flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={`${link.id}`} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={toggleActive}>
          {active ? <img src={xIcon} /> : <img src={menuIcon} />}
        </button>
      </div>
    </nav>
  );
};
