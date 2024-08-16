export const Button = ({ text, handleClick, width }) => {
  return (
    <button className="buttonAdd" width={width} onClick={handleClick}>
      {text}
    </button>
  );
};
