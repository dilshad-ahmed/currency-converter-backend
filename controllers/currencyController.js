import axios from "axios";

export const getCurrencies = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSupportedVsCurrencies = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const convertCurrency = async (req, res) => {
  const { sourceCrypto, amount, targetCurrency } = req.query;

  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: sourceCrypto,
          vs_currencies: targetCurrency,
        },
      }
    );

    if (response.data && response.data[sourceCrypto]) {
      const exchangeRate = response.data[sourceCrypto][targetCurrency];
      // currency convert logic
      const convertedAmount = amount * exchangeRate;
      res.status(200).json({
        sourceCrypto,
        exchangeRate,
        amount,
        targetCurrency,
        convertedAmount,
      });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
