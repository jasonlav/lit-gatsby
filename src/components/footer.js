import React from "react";
import * as Styles from "./footer.module.scss";
import ClassNameArray from "../scripts/class-name-array";

const Footer = () => {
    return (
        <footer className={ClassNameArray([Styles.footer])}>
          <small className={Styles.line}>© 2022 Acme, Inc.</small>
          <small className={Styles.line}><a href="/file.pdf" target="_blank">Privacy Policy</a></small>
        </footer>
    )
}

export default Footer;
