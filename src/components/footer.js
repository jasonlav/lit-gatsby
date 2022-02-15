import React from "react";
import * as Styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={Styles.footer}>
          <small className={Styles.line}>© 2022 Acme, Inc.</small>
          <small className={Styles.line}><a href="/file.pdf" target="_blank">Privacy Policy</a></small>
        </footer>
    )
}

export default Footer;
