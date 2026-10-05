const { useState, useMemo } = React;

const conversionRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

export function CurrencyConverter() {
  const currencies = Object.keys(conversionRates);

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const convertedAmounts = useMemo(() => {
    const results = {};

    for (const currency of currencies) {
      results[currency] =
        amount *
        (conversionRates[currency] / conversionRates[fromCurrency]);
    }

    return results;
  }, [amount, fromCurrency]);

  return (
    <div>
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <p>
        {convertedAmounts[toCurrency].toFixed(2)} {toCurrency}
      </p>
    </div>
  );
}