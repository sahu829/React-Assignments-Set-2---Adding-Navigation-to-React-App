import React from "react";
import { useLocation } from "react-router-dom";

export default function LoactionDisplay() {
  return (
    <>
      <div data-testid="location-display">{useLocation().pathname}</div>
    </>
  );
}
