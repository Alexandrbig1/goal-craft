import { InfoBoxProps } from "../../types/types";
import { HintBox, WarningBox } from "./InfoBox.styled";

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;

  if (mode === "hint") {
    return <HintBox>{children}</HintBox>;
  }

  const { severity } = props;

  return (
    <WarningBox severity={severity}>
      {severity !== "low" && <h2>Warning</h2>}
      {children}
    </WarningBox>
  );
}
