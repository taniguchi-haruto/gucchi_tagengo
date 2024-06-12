export const Start = (props) => {
  const { onClick, start, display } = props;
  return (
    <>
      <button onClick={onClick} display={display}>
        {start}
      </button>
    </>
  );
};
