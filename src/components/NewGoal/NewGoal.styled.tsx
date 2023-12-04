import styled from "styled-components";

export const FormLabel = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #edc531;
`;

export const FormInput = styled.input`
  font: inherit;
  width: 100%;
  padding: 0.5rem;
  background-color: #dad7d6;
  border: none;
  border-radius: 4px;
  color: #202020;
`;

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  background-color: ${(p) => p.theme.colors.accentColor};
  border: none;
  border-radius: 4px;
  font: inherit;
  font-weight: bold;
  color: #3a4346;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f9e175;
  }
`;
