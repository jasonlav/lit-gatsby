import React from "react";
import Layout from "../../components/layout";
import * as Styles from "./[...].module.scss";

const Profile = ({ params }) => {
  return (
    <Layout>
      <div className={Styles.root}>
        <h1>{params['*']}</h1>
      </div>
    </Layout>
  )
}

export default Profile;