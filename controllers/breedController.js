const axios = require("axios");

const getBreedData = async (req, res) => { 
  const id= req.params.id
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/breeds/search?q=${id}`
    );
    const data = response.data;
    res.send(data);
  } catch (error) {
    console.error("There was a problem fetching the data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { getBreedData };
