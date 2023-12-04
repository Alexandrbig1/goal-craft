import { ReactNode } from "react";

export type GoalProps = {
  title: string;
  description: string;
  id: string;
};

export type GoalsListProps = {
  goals: GoalProps[];
  onDelete: (id: string) => void;
};

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";

  children: ReactNode;
};

export type InfoBoxProps = HintBoxProps | WarningBoxProps;
