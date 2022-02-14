import React from "react";
import * as Styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={Styles.footer}>
          <small>Copyright notice. <a href="/file.pdf" target="_blank">PDF download</a>.</small>
        </footer>
    )
}

export default Footer;