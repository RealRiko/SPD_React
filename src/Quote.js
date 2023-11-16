const Quote = (props) => {
  return (
    <>
      <h2>{props.author}</h2>
      <p>{props.quotes}</p>
    </>
  );
};

export default Quote;
