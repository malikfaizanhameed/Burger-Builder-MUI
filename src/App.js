import React from "react";
import Button from "@material-ui/core/Button";
import Layout from "./Layout";
import BurgerBuilder from "./BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
