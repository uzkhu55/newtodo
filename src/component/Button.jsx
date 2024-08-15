export const Button = ({ text, handleClick }) => {
  return (
    <button className="buttonAdd" onClick={handleClick}>
      {text}
    </button>
  );
};
