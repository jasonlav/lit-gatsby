import React from "react";
import Layout from "../../components/layout";
import * as Styles from "./[...].module.scss";
import { Router, Link } from "@reach/router"
import ProfileIndex from "../../components/profile-index";
import ProfilePosts from "../../components/profile-posts";
import ProfileStats from "../../components/profile-stats";

const Profile = ({ params }) => {
  return (
    <Layout>
      <nav>
        <ul>
          <li><Link to="/profile">Index</Link></li>
          <li><Link to="/profile/posts">Posts</Link></li>
          <li><Link to="/profile/stats">Stats</Link></li>
        </ul>
      </nav>
      <Router basepath="/profile">
        <ProfileIndex path="/" />
        <ProfilePosts path="/posts" />
        <ProfileStats path="/stats" />
      </Router>
    </Layout>
  )
}

export default Profile;