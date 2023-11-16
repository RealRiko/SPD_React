import React, { useEffect, useState } from "react";
import Quote from "./Quote";

function QuoteList() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      console.log(data);
      setQuote(data.quotes);
      setLoading(false);
    }
    getData();
  }, []);
  const quotes = quote.map((quote, index) => {
    return (
      <>
        <Quote key={index} quotes={quote.quote} author={quote.author} />
      </>
    );
  });
  return (
    <div className="App">
      <h1>Quote</h1>
      {loading ? <p>Lādējas...</p> : <>{quotes}</>}
    </div>
  );
}

export default QuoteList;
