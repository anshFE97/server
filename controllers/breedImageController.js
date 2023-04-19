const axios = require("axios");

const getImagesData = async (req, res) => {
    const breedName = req.params.breedName;
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName}&limit=10`);
      const imageUrls = response.data.map((image) => image.url);
      res.send(imageUrls);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
};

module.exports = { getImagesData };
