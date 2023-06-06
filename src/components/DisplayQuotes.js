import React, { useState, useEffect } from 'react';

function DisplayQuote() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=courage', {
      headers: {
        'X-Api-Key': 'HZ3MkOU+6mRUWHnauieRxw==AY0PewsrdfGPKDGd',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((result) => {
        setData(result[0].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="quote-container">
        <p>Quote is loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">Could not fetch quote. Ensure the url is correct and try again</div>
    );
  }

  return (
    <div className="quote-container">
      <p className="quote">{data}</p>
    </div>
  );
}

export default DisplayQuote;
