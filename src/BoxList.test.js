import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it ("renders without crashing", function () {
  render(<BoxList />)
})

it("matches the snapshot", function () {
  const { asFragment } = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot()
})

function addBox(boxList, boxHeight = "50", boxWidth = "50", boxColor = "yellow") {
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  const backgroundInput = boxList.getByLabelText("Background Color");
  fireEvent.change(backgroundInput, { target: { value: boxColor } });
  fireEvent.change(widthInput, { target: { value: boxWidth } });
  fireEvent.change(heightInput, { target: { value: boxHeight } });
  const button = boxList.getByText("Add new box");
  fireEvent.click(button);
}

it("can add a new box", function () {
  const boxList = render(<BoxList />)

  // validate no boxes on the DOM
  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  // add a box to the DOM
  addBox(boxList);

  // expect box with remove button in DOM
  const removeButton = boxList.getByText("X")
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 50px;
    height: 50px;
    background-color: yellow
    `); 

  expect(boxList.getAllByDisplayValue("")).toHaveLength(3)
})

it("can remove a box", function () {
  const boxList = render(<BoxList />)
  addBox(boxList)

  const removeButton = boxList.getByText("X")

  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
})