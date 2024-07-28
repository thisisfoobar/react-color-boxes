import { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    boxWidth: "",
    boxHeight: "",
    boxColor: ""
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({...formData});
    setFormData(INITIAL_STATE)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxWidth">Width</label>
      <input
        id="boxWidth"
        type="number"
        min="1"
        max="200"
        name="boxWidth"
        placeholder="Box Width"
        value={formData.boxWidth}
        onChange={handleChange}
      />
      <label htmlFor="boxHeight">Height</label>
      <input
        id="boxHeight"
        type="number"
        min="1"
        max="200"
        name="boxHeight"
        placeholder="Box Height"
        value={formData.boxHeight}
        onChange={handleChange}
      />
      <label htmlFor="boxColor">Background Color</label>
      <input
        id="boxColor"
        type="text"
        name="boxColor"
        placeholder="Box Color"
        value={formData.boxColor}
        onChange={handleChange}
      />
      <button>Add new box</button>
    </form>
  )
};

export default NewBoxForm;