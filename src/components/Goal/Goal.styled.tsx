import styled from "styled-components";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";

export const Title = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  color: #2d2a32;
  line-height: normal;
`;

export const Article = styled.article`
  display: grid;
  grid-template-columns: 2.4fr 0.6fr;
  align-items: start;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #5e5b52;
  line-height: normal;
`;

export const Button = styled(BsFillFileEarmarkCheckFill)`
  font: inherit;
  background: transparent;
  border: none;
  color: #909a9a;
  cursor: pointer;
  font-size: 2.4rem;
  transition: 0.3s;
  justify-self: end;

  &:hover {
    color: #dab22e;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
