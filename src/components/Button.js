import React from "react";

export function Button({ label, isDisabled, onClick }) {
  return (
    <button
      type="button"
      className="btn_basic"
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
