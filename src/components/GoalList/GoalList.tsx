import { ReactNode } from "react";
import { GoalsListProps } from "../../types/types";
import Goal from "../Goal/Goal";
import InfoBox from "../InfoBox/InfoBox";
import { Menu, ListItems } from "./GoalList.styled";

export default function GoalList({ goals, onDelete }: GoalsListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no goals yet. Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4 && goals.length < 6) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You're doing well, keep it up!
      </InfoBox>
    );
  } else if (goals.length >= 6 && goals.length < 8) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You have a good number of goals. Prioritize and stay focused!
      </InfoBox>
    );
  } else if (goals.length >= 8) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collection a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <Menu>
        {goals.map(({ title, description, id }) => (
          <ListItems key={id}>
            <Goal
              title={title}
              description={description}
              id={id}
              onDelete={onDelete}
            />
          </ListItems>
        ))}
      </Menu>
    </>
  );
}
