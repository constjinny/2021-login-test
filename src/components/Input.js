import React from "react";

export function Input({
  id,
  type,
  value,
  isError,
  isDisabled,
  placeholder,
  onChange,
}) {
  const checkClassName = isError ? "inp_basic on_error" : "inp_basic";

  return (
    <input
      id={id}
      type={type || "text"}
      value={value}
      autoComplete="off"
      disabled={isDisabled}
      className={checkClassName}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
