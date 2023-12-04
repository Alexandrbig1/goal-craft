import styled from "styled-components";

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

export const ListItems = styled.li`
  background-color: #dee2e6;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;
