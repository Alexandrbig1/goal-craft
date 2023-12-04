import { useRef, type FormEvent } from "react";
import { FormLabel, FormInput, FormButton } from "./NewGoal.styled";

type NewGoalProps = {
  handleAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ handleAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmitGoal(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset();

    handleAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmitGoal}>
      <p>
        <FormLabel htmlFor="goal">Your goal</FormLabel>
        <FormInput type="goal" typeof="text" ref={goal} />
      </p>
      <p>
        <FormLabel htmlFor="summary">Short summary</FormLabel>
        <FormInput type="summary" typeof="text" ref={summary} />
      </p>
      <p>
        <FormButton>Add Goal</FormButton>
      </p>
    </form>
  );
}
