import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
