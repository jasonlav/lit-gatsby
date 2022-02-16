import React from "react";
import Header from "./header";
import Footer from "./footer";
import * as Styles from "./layout.module.scss";
import './styles.scss';
import PropTypes from "prop-types";

const Layout = (props) => {
    return (
        <div id="site">
            <Header></Header>
            <main className={Styles.main}>
                {props.children}
            </main>
            <Footer></Footer>
        </div>
    )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;
