import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink to="rock-paper-scissors">Rock, Paper, Scissors</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
