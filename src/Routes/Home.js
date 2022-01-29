import React, { useState, useEffect } from "react";
import Card from "./../components/card";
import Empty from "./../components/empty"
import list from "./../Data/index"

export default function Home() {
  const [exerciseLinks, setExerciseLinks] = useState([]);
  useEffect(() => {
    setExerciseLinks(list)
  }, []);
  
  return (
    <div>
      <h1>Welcome to react exercises</h1>
      {
        exerciseLinks.length > 0 &&
        exerciseLinks.map((link, index) => {
        return (
          <Card
            key={index}
            title={link.title} 
            content={link.description} 
            link={link.link} 
          />
        )
      })}
      {
        exerciseLinks.length === 0 &&
        <Empty message={"No links available"} />
      }
    </div>
  );
}