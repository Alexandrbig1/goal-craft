import { Title, Article, Text, Button, ListWrapper } from "./Goal.styled";

type GoalProps = {
  title: string;
  description: string;
  id: string;
  onDelete: (id: string) => void;
};

export default function Goal({ title, description, onDelete, id }: GoalProps) {
  return (
    <Article>
      <ListWrapper>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </ListWrapper>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Article>
  );
}
