import React from "react";
import Aux from "./Aux";

const Layout = (props) => {
  return (
    <Aux>
      <div>This will be the Side Drawer</div>
      <div>This will be the App Bar</div>
      <div>Backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
