import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    switch(document.location.pathname) {
        case "/news": {
            return (
                <div>
                    <NavLink to={"/"}>To Do List</NavLink>
                    <NavLink to={"/weather"}>Weather Channel</NavLink>
                </div>
            );
        }
        case "/weather": {
            return (
                <div>
                    <NavLink to={"/"}>To Do List</NavLink>
                    <NavLink to={"/news"}>News Channel</NavLink>
                </div>
            );
        }
        default: {
            return (
                <div>
                    <NavLink to={"/news"}>News Feed</NavLink>
                    <NavLink to={"/weather"}>Weather Channel</NavLink>
                </div>
            );
        }
    }
};

export default Header;