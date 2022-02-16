import React, {lazy, useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import ExercisesData from '../Data/exercises';
import Layout from '../components/layout';
import Header from '../components/exerciseHeader';
import Body from '../components/exerciseBody';
import Syntax from '../components/exerciseSyntax';
import Render from '../components/exerciseRender';

export default function Exercise() {
  const { name } = useParams();
  const exercise = ExercisesData[name];
  const [exerciseTitle, setExerciseTitle] = useState("");
  const [exerciseCaption, setExerciseCaption] = useState("");
  const [exerciseCodeString, setExerciseCodeString] = useState("");
  const [ExerciseComponent, setExerciseComponent] = useState(lazy(() => import(`../Exercises/empty`)));
  
  useEffect(() => {
    setExerciseTitle(exercise.title);
    setExerciseCaption(exercise.description)
    setExerciseCodeString(exercise.codeString);
    setExerciseComponent(lazy(() => import(`./../Exercises/${exercise.componentName}`)));
  }, []);
  const layoutWidth = 1200;
  return (
    <Layout>
      <Header 
        title={exerciseTitle} 
        caption={exerciseCaption}
        width={layoutWidth}
      />
      <Body 
        width={layoutWidth} 
      >
        <Syntax 
          syntax={exerciseCodeString} 
        />
        <Render
          component={ <ExerciseComponent /> }
        />
      </Body>
    </Layout>
  );
}