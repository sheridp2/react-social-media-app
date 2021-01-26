import React, { useContext, useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === "/" ? "Reactor" : pathname.split("/").pop();

  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="Reactor"
        active={activeItem === "Reactor"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      >
        <Icon name="react" size="large"></Icon>
        Reacter
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name={`${user.id}`}
          active={activeItem === `${user.id}`}
          onClick={handleItemClick}
          as={Link}
          to={`/user/${user.id}`}
        >
          {user.username}
        </Menu.Item>
        <Menu.Item name="logout" onClick={logout} />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="Reactor"
        active={activeItem === "Reactor"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      >
        <Icon name="react" size="large"></Icon>
        Reacter
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
