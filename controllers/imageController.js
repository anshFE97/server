const axios = require('axios');

const fetchCatImage = async (req, res) => {
  const { breed_id } = req.params;

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_id=${breed_id}`
    );
    const imageURL = response.data[0].url;
    res.json(imageURL);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { fetchCatImage };