import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ul>
        <li>
          <NavLink to="rock-paper-scissors">Rock, Paper, Scissors</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
