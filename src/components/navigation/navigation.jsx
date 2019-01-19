import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navigation.css";
import * as ROUTES from "../../constants/routes";

const paths = [
  {
    value: "/",
    path: ROUTES.ROOT
  },
  {
    value: "projects",
    path: ROUTES.PROJECTS
  },
  {
    value: "others",
    path: ROUTES.OTHERS
  },
  {
    value: "About",
    path: ROUTES.ABOUT
  }
];

const Navigation = ({ history }) => {
  const { pathname } = history.location;
  return (
    <div className="navigation">
      <div className="menu">
        {paths.map((item, index) => (
          <Link
            key={index}
            className="menu-items"
            to={item.path}
            style={{ fontWeight: pathname === item.path ? "bold" : "" }}
          >
            {" "}
            {item.value}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Navigation);
