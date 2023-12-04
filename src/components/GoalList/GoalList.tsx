import { GoalProps } from "../../types/types";
import Goal from "../Goal/Goal";
import { Menu, ListItems } from "./GoalList.styled";

type GoalsListProps = {
  goals: GoalProps[];
  onDelete: (id: string) => void;
};

export default function GoalList({ goals, onDelete }: GoalsListProps) {
  return (
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
  );
}
