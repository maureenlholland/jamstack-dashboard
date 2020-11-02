import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <>
    <Layout>
      <h1 style={{ color: "red" }}>Dashboard Example</h1>
      <Link to="/dashboard">Go to dashboard</Link>
    </Layout>
  </>
);
