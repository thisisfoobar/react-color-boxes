import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [
    // { id: uuid(), boxWidth: 20, boxHeight: 30, boxColor: "Orange" },
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const removeBox = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id))
  }

  return (
    <div>
      <h3>Color Boxes</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, boxWidth, boxHeight, boxColor }) => (
          <Box
            key={id}
            id={id}
            width={boxWidth}
            height={boxHeight}
            backgroundColor={boxColor}
            handleRemove={removeBox}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
