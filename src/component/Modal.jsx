import { Button } from "./Button";
import { Input } from "./Input";
import { Paragraph } from "./Paragraph";

export const Modal = () => {
  return (
    <div className="modal">
      <Paragraph
        text={"Modal"}
        color={"White"}
        fontSize={"24px"}
        fontWeight={"700"}
      />
      <Input />
      <Button />
    </div>
  );
};
