const Box = ({ id, width, height, backgroundColor, handleRemove }) => {
  const remove = () => handleRemove(id)
  return (
    <div>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor,
        }}
      ></div>
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;
