import React, { useEffect, useState } from 'react';
import './calStyles.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const API_ID = 'qQHVPjqOrMfuPCBMH5srTg==lkmZ7PBjNY8m82Uz';
  const URL = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(URL, {
          headers: {
            'X-Api-Key': API_ID,
          },
        });
        const data = await response.json();
        setQuotes(data[0]);
        setLoading(false);
      } catch (error) {
        setError('Error Fetching quote');
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="quotesCont">
      {loading && <p className="loadQuote" />}
      {!loading && !error && (
        <div>
          <p className="quoteStyle">
            &quot;
            {quotes.quote}
            &quot;
          </p>
          <p>
            -
            {quotes.author}
          </p>
        </div>
      )}
      {!loading && error && <p>{error}</p>}
    </div>
  );
};

export default Quotes;
