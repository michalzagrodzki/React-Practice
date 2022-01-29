import React from "react";

export default function Header({ title, caption }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{caption}</h4>
    </div>
  )
}