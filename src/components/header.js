import React from "react";
import * as Styles from "./header.module.scss";
import { Link } from "gatsby";

const Header = () => {
    return (
        <header className={Styles.header}>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </header>
    )
}

export default Header;