import React from "react";
import { useLocation } from "react-router-dom";

export default function LoactionDisplay() {
  return (
    <>
      <div>{useLocation().pathname}</div>
    </>
  );
}
