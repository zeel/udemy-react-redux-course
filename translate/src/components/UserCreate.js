import React, { useContext } from "react";
import Field from "./Field";
import Button from "./Button";
import Context from "../context";
export default () => {
  const val = useContext(Context);
  return (
    <div>
      {/* <Context.Consumer>{val => `Hello ${val}`}</Context.Consumer> */}

      <Field />
      <Button />
    </div>
  );
};
