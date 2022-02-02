import React, { useEffect } from "react";
import Router from "next/router";

export default () => {
  useEffect(() => {
    Router.push("/");
  });

  return <div />;
}
