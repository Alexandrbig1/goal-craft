import styled from "styled-components";
import todoImage from "@/assets/todo.jpg";

export const Main = styled.main`
  width: 90%;
  max-width: 40rem;
  margin: 3rem auto;
  padding: 2.4rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.2rem;
  color: ${(p) => p.theme.colors.accentColor};
`;

export const Container = styled.div`
  min-height: 100vh;
  padding: 3.2rem;
  background: url(${todoImage}), linear-gradient(to bottom, #dee2e6, #f1f3f5);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
`;
