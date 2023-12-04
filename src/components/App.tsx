import goalsImg from "../assets/goal.png";
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import GoalList from "./GoalList/GoalList";
import { GoalProps } from "../types/types";
import NewGoal from "./NewGoal/NewGoal";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Main, HeaderTitle, Container } from "./App.styled";
import { nanoid } from "nanoid";

//
// Add toastify notifications !!!
//

const theme = {
  colors: {
    accentColor: "#e3be3b",
    red: "red",
  },
};

export default function App() {
  const checkedGoals = JSON.parse(localStorage.getItem("goals") || "null");
  const [goals, setGoals] = useState<GoalProps[]>(
    checkedGoals === null ? [] : checkedGoals
  );

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: GoalProps = {
        id: nanoid(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: string) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Main>
          <Header image={{ src: goalsImg, alt: "A list of goals" }}>
            <HeaderTitle>Your Goals List</HeaderTitle>
          </Header>
          <NewGoal handleAddGoal={handleAddGoal} />
          <GoalList goals={goals} onDelete={handleDeleteGoal} />
        </Main>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
