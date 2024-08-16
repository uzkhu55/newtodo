import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Paragraph } from "./Paragraph";
export const List = ({ text }) => {
  const [neewtask, setNeewtask] = useState("");
  const [newetask, setNewetask] = useState([]);

  const handleClick = () => {
    setNewetask([...newetask, neewtask]);
  };
  const deleteTask = (index) => {
    const updatedTasks = newetask.filter((_, i) => i !== index);
    setNewetask(updatedTasks);
  };
  return (
    <div className="list">
      <Paragraph fontSize={"24px"} text={text} color={"white"} />
      <Input
        placeholder={"budhfgiljko;l"}
        value={neewtask}
        handler={setNeewtask}
      />
      <Button text={"Add"} handleClick={handleClick} />
      {newetask.map((el, index) => {
        return (
          <div draggable="true" className="return" key={index}>
            {el}
            <Button
              handleClick={() => deleteTask(index)}
              width={"50px"}
              text={"dlt"}
            />
          </div>
        );
      })}
    </div>
  );
};
