import React from "react";
import Header from "./header";
import Footer from "./footer";
import * as Styles from "./layout.module.scss";

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

export default Layout;