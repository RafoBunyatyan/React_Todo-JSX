import React, { useContext } from "react";
import { Nav as NavBar, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Theme from "./context";

function Nav() {
	const { theme, setTheme } = useContext(Theme);

    return (
      <NavBar>
        <NavItem>
          <Link to="/">ToDo</Link>
        </NavItem>
        <Button color={ theme ? "dark" : "primary" }
		  onClick={() => {
            setTheme(!theme);
          }}>{ theme ? "Dark" : "Ligth" }
        </Button>
      </NavBar>
    );
};

export default Nav ;