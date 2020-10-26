import React from "react";
import {useHistory} from "react-router-dom"
import { Header, ExerciseCard, TitleContainer, Container } from "./Mainscene_styles";

function Home() {
  const items = Array.from(Array(10).keys());

  const history = useHistory()

  const handleCardClick = (item) => {
    history.push("/exercise-" + (item + 1))
  }
  return (
    <>
      <Header>React exercises</Header>
      <Container>
        {items.map((item) => (
          <ExerciseCard key={item} onClick={() => handleCardClick(item)}>
            <TitleContainer>{`Exercise ${item + 1}`}</TitleContainer>
          </ExerciseCard>
        ))}
      </Container>
    </>
  );
}

export default Home;