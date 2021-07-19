import React from "react";
import Aux from "../Aux/Aux";
// import ButtonAppBar from "./ButtonAppBar";
import PersistentDrawerLeft from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  return (
    <Aux>
      {/* <ButtonAppBar /> */}
      <PersistentDrawerLeft />
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
