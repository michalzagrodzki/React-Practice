import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ title, content, link }) {
  let navigate = useNavigate();

  async function handleNavigation(event) {
    event.preventDefault();
    navigate(`../exercise/${link}`);
  }

  return (
    <div onClick={handleNavigation}>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  )
}