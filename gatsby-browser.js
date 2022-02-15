import React from "react";
import Layout from "./src/components/layout";
import "@fontsource/open-sans/500.css"
import "@fontsource/open-sans/800.css"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
