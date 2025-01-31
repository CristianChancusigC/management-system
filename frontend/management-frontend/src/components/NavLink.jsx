import { Link } from "react-router-dom";

export const NavLink = ({ to, title }) => {
  return (
    <Link to={`/${to}`} className="text-white hover:border-b-2">
      {title}
    </Link>
  );
};
