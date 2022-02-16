import React, { useEffect, useState } from "react";
import * as Styles from "./header.module.scss";
import { Link } from "gatsby";
import { useLocation } from '@reach/router';
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const location = useLocation();
  const [dark, setDark] = useState(0);

  useEffect(() => {
    setDark(!!(location.pathname.match(/\/profile/)));
  }, [location]);

  return (
    <header className={`${Styles.root} ${(dark) ? Styles.dark : Styles.light}`}>
      <Link to="/" className={Styles.logo}>
        <StaticImage src="./../images/logo.png" alt="Curious Media" layout="fixed" width={100} placeholder="none" loading="eager" className="no-fade" />
      </Link>
      <nav>
        <ul className={Styles.links}>
          <li className={Styles.link}><Link to="/" activeClassName={Styles.active} partiallyActive={Styles.active}>Home</Link></li>
          <li className={Styles.link}><Link to="/blog" activeClassName={Styles.active} partiallyActive={Styles.active}>Blog</Link></li>
          <li className={Styles.link}><Link to="/profile" activeClassName={Styles.active} partiallyActive={Styles.active}>Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
