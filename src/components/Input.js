import React from "react";

export function Input({ id, value, placeholder, onChange }) {
  return (
    <input
      id={id}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
