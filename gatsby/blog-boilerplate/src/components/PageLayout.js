import React from "react";

export default function PageLayout(props) {
  console.log(props.children);
  return (
    <div style={{ maxWidth: "780px", margin: "auto" }}>{props.children}</div>
  );
}
