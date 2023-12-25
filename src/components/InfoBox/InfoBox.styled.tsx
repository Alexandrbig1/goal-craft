import styled, { css } from "styled-components";

interface WarningBoxProps {
  severity: "low" | "medium" | "high";
}

export const InfoBoxContainer = styled.aside`
  margin: 2rem 0;
  padding: 0.5rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  font-size: 0.85rem;
  border-radius: 4px;
`;

export const HintBox = styled(InfoBoxContainer)`
  border: 1px solid #96f5f7;
  color: #96f5f7;
`;

export const WarningBox = styled(InfoBoxContainer)<WarningBoxProps>`
  ${({ severity }) => css`
    border: 1px solid ${getBorderColor(severity)};
    color: ${getBorderColor(severity)};
  `}
`;

const getBorderColor = (severity: "low" | "medium" | "high"): string => {
  switch (severity) {
    case "low":
      return "#f6d84f";
    case "medium":
      return "#f9a73b";
    case "high":
      return "#f97373";
    default:
      return "#f6d84f";
  }
};
