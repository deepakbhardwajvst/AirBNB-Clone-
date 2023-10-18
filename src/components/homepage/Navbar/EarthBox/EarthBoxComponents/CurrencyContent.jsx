import React from "react";

const CurrencyContent = () => {
  const currency = [
    { name: "Indian Rupee", code: "INR", symbol: "₹" },
    { name: "Australian Dollar", code: "AUD", symbol: "$" },
    { name: "Brazilian Real", code: "BRL", symbol: "R$" },
    { name: "Bulgarian Lev", code: "BGN", symbol: "лв." },
    { name: "Canadian Dollar", code: "CAD", symbol: "$" },
    { name: "Chilean Peso", code: "CLP", symbol: "$" },
    { name: "Chinese Yuan", code: "CNY", symbol: "￥" },
    { name: "Colombian Peso", code: "COP", symbol: "$" },
    { name: "Costa Rican Colon", code: "CRC", symbol: "₡" },
    { name: "Croatian Kuna", code: "HRK", symbol: "kn" },
    { name: "Czech Koruna", code: "CZK", symbol: "Kč" },
    { name: "Danish Krone", code: "DKK", symbol: "kr" },
    { name: "Emirati Dirham", code: "AED", symbol: "ﺩ.ﺇ" },
    { name: "Euro", code: "EUR", symbol: "€" },
    { name: "Hong Kong Dollar", code: "HKD", symbol: "$" },
    { name: "Hungarian Forint", code: "HUF", symbol: "Ft" },
    { name: "Indonesian Rupiah", code: "IDR", symbol: "Rp" },
    { name: "Israeli New Shekel", code: "ILS", symbol: "₪" },
    { name: "Japanese Yen", code: "JPY", symbol: "¥" },
    { name: "Malaysian Ringgit", code: "MYR", symbol: "RM" },
    { name: "Mexican Peso", code: "MXN", symbol: "$" },
    { name: "Moroccan Dirham", code: "MAD" },
    { name: "New Taiwan Dollar", code: "TWD", symbol: "$" },
    { name: "New Zealand Dollar", code: "NZD", symbol: "$" },
    { name: "Norwegian Krone", code: "NOK", symbol: "kr" },
    { name: "Peruvian Sol", code: "PEN", symbol: "S/" },
    { name: "Philippine Peso", code: "PHP", symbol: "₱" },
    { name: "Polish Zloty", code: "PLN", symbol: "zł" },
    { name: "Pound Sterling", code: "GBP", symbol: "£" },
    { name: "Romanian Leu", code: "RON", symbol: "lei" },
    { name: "Saudi Arabian Riyal", code: "SAR", symbol: "SR" },
    { name: "Singapore Dollar", code: "SGD", symbol: "$" },
    { name: "South African Rand", code: "ZAR", symbol: "R" },
    { name: "South Korean Won", code: "KRW", symbol: "₩" },
    { name: "Swedish Krona", code: "SEK", symbol: "kr" },
    { name: "Swiss Franc", code: "CHF" },
    { name: "Thai Baht", code: "THB", symbol: "฿" },
    { name: "Turkish Lira", code: "TRY", symbol: "₺" },
    { name: "United States Dollar", code: "USD", symbol: "$" },
    { name: "Uruguayan Peso", code: "UYU", symbol: "$U" },
  ];

  return (
    <div>
      <div className="currency-container">
        <h2 className="currency-heading">Choose a currancy</h2>
        <div className="flex">
          {currency.map((data, index) => {
            return (
              <div className="flex" key={index}>
                <div className="search-box-suggestion-items">
                  <div className="search-box-suggestion-item">
                    <p className="Search-box-suggestion-lang">{data.name}</p>
                    <p className="Search-box-suggestion-lang o">
                      {data.code}_{data.symbol}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurrencyContent;
