import React from "react";

export function Button({ label, onClick }) {
  return (
    <button type="button" className="btn_basic" onClick={onClick}>
      {label}
    </button>
  );
}
