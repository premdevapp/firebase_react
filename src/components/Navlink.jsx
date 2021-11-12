import { NavLink as Link, useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Navlink = ({ to, name, ...rest }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <Button
        as="a"
        variant={isActive ? "outline" : "ghost"}
        colorScheme={isActive ? "primary" : "gray"}
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
};

export default Navlink;
