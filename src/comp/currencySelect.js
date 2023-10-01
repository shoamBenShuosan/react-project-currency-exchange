import React from 'react';

export default function CurrencySelect({ currencyOptions, selectedCurrency, onSelectCurrency }) {
  return (
    <select
      className="form-select"
      value={selectedCurrency}
      onChange={onSelectCurrency}
    >
      {currencyOptions.map((option) => (
        <option className="text-center" key={option.value} value={option.value} icon={option.icon}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
