import React from "react";
import Aux from "./Aux";
import ButtonAppBar from "./ButtonAppBar";

const Layout = (props) => {
  return (
    <Aux>
      <ButtonAppBar />
      <div>This will be the Side Drawer</div>
      <div>Backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
