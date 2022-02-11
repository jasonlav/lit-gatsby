import React, { useEffect, useState } from "react";
import * as Styles from "./header.module.scss";
import { Link } from "gatsby";
import { useLocation } from '@reach/router';
import logo from "./../images/logo.png";

const Header = () => {
  const location = useLocation();
  const [condensed, setCondensed] = useState(0);

  useEffect(() => {
    setCondensed(!!(location.pathname.match(/\/profile/)));
  }, [location]);

  return (
    <header className={`${Styles.header} ${(condensed) ? Styles.condensed : Styles.full}`}>
      <Link to="/" className={Styles.logo}>
        <img src={logo} alt="Curious Media" />
      </Link>
      <nav>
        <ul className={Styles.links}>
          <li className={Styles.link}><Link to="/" activeClassName={Styles.active}>Home</Link></li>
          <li className={Styles.link}><Link to="/blog" activeClassName={Styles.active}>Blog</Link></li>
          <li className={Styles.link}><Link to="/profile" activeClassName={Styles.active}>Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;