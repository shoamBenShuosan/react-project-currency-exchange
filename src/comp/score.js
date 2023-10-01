import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

export default function Score(props) {
  const { amount, fromCurrency, toCurrency, toCurrencyFlag, fromCurrencyFlag } = props;

  const [convertedAmount, setConvertedAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doApi = async () => {
      const url = "https://monkeys.co.il/api2/currency.php";
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`Failed to fetch data (status ${resp.status})`);
        }
        const data = await resp.json();
        const quotes = data.quotes;
        const rateFrom = quotes[`USD${fromCurrency}`];
        const rateTo = quotes[`USD${toCurrency}`];

        if (rateFrom && rateTo) {
          const rate = rateTo / rateFrom;
          const converted = amount * rate;
          setConvertedAmount(converted);
        } else {
          console.error('Invalid currency codes.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    doApi();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="text-center">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ fontSize: '20px', color: 'red' }}>
          Error: {error}
        </p>
      ) : (
        <p style={{ fontSize: '40px' }}>
          {amount} {fromCurrency} <Icon icon={fromCurrencyFlag} /> = {convertedAmount.toFixed(2)} {toCurrency} <Icon icon={toCurrencyFlag} />
        </p>
      )}
    </div>
  );
}
