const axios = require("axios");

const getBreedsData = async (req, res) => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds");
    const catsData = response.data
    res.json(catsData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching cat data");
  }
};

module.exports = { getBreedsData };
