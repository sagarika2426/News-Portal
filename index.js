const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());

app.get("/latest-news", async (req, res) => {
  try {
    const apiKey = "6ee8d5e3d8dc4db9a8e5b257929a41a1";
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    if (req.query.category) {
        url += `&category=${req.query.category.toLowerCase()}`;
      }

    // Fetch data from NewsAPI
    const response = await axios.get(url);
    console.log(response);

    // Send the response data from NewsAPI to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from NewsAPI:", error);
    res.status(500).json({ error: "Failed to fetch data from NewsAPI" });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
