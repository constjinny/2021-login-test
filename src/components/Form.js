import React from "react";

export function Form({ title, children }) {
  return (
    <div className="box_form">
      <strong>{`${title} :`}</strong>
      <div>{children}</div>
    </div>
  );
}
