import React, { useState } from 'react';
import Score from './score';
import { Icon } from '@iconify/react';
import '../style.css';
import CurrencySelect from './currencySelect';

export default function Input() {

  const currencyOptions = [
    { value: 'ILS', label: 'Israeli Shekel (ILS)', flag: 'https://flagicons.lipis.dev/flags/4x3/lb.svg', icon: 'flag:il-4x3' },
    { value: 'USD', label: 'US Dollar (USD)', flag: 'https://flagicons.lipis.dev/flags/4x3/il.svg' , icon: 'flag:us-4x3'},
    { value: 'EUR', label: 'Euro (EUR)', flag: 'https://flagicons.lipis.dev/flags/4x3/il.svg' , icon: 'flag:eu-4x3'},
    { value: 'THB', label: 'Thai Baht (THB)', flag: 'https://flagicons.lipis.dev/flags/4x3/il.svg' , icon: 'flag:cr-4x3'},
    { value: 'BTC', label: 'Bitcoin (BTC)', flag: 'https://flagicons.lipis.dev/flags/4x3/il.svg' , icon: 'cryptocurrency-color:bch'},
  ];
  
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('ILS');
  const [fromCurrencyIcon, setFromCurrencyIcon] = useState('flag:us-4x3');
  const [toCurrencyIcon, setToCurrencyIcon] = useState('flag:il-4x3');

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 4) {
      setAmount(inputValue.slice(0, 4));
    } else 
      setAmount(inputValue);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
    setFromCurrencyIcon(event.target.options[event.target.selectedIndex].getAttribute('icon'));
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
    setToCurrencyIcon(event.target.options[event.target.selectedIndex].getAttribute('icon'));
  };

  const toggleCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setFromCurrencyIcon(toCurrencyIcon);
    setToCurrencyIcon(fromCurrencyIcon);
  };

  return (
    <div className="container">
      <div className='row justify-content-center'>
        <div className="box col-md-6 col-lg-4 text-center bg-warning rounded">
          <h2>Currency Exchange</h2>
          <div className="form-group">
            <label htmlFor="amount" className='labels'>Amount :</label>
            <input
              className='text-center font-weight-bold w-100 border-0 rounded'
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              min="1"
              maxLength="5"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fromCurrency" className='labels'>from Currency :</label>
            <CurrencySelect
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
              onSelectCurrency={handleFromCurrencyChange}
            />
          </div>
          <div>
            <button
              type="button"
              variant="light"
              onClick={toggleCurrencies}
              className="btn custom-small-button"
            >
              <Icon icon='eos-icons:arrow-rotate' style={{ fontSize: '2em' }}/>
            </button>
          </div>
          <div className="form-group">
            <label className='labels'>To Currency :</label>
            <CurrencySelect
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
              onSelectCurrency={handleToCurrencyChange}
            />
          </div>
          <br />
        </div>
      </div>
      <Score
        toCurrencyFlag={toCurrencyIcon}
        fromCurrencyFlag={fromCurrencyIcon}
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </div>
  );
}
