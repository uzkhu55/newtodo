export const Input = ({ placeholder, value, handler }) => {
  const inputHandler = (event) => {
    event.preventDefault();
    handler(event.target.value);
  };
  return (
    <input
      className="inputModal"
      placeholder={placeholder}
      value={value}
      onChange={(event) => inputHandler(event)}
    />
  );
};
