const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//API endpoint to retrieve weather data for multiple cities
// localhost:3000/api/weather/multiple?cities=delhi,bangalore&page=1&pageSize=5
app.get("/api/weather/multiple", async (req, res) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const cities = req.query.cities; // Expecting a comma-separated list of city names or codes
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    if (!cities) {
      return res.status(400).json({ error: "Cities parameter is required" });
    }

    const citiesArray = cities.split(",");

    // Paginate the array of cities based on the requested page and pageSize
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCities = citiesArray.slice(startIndex, endIndex);

    // Use Promise.all to fetch weather data for the paginated cities concurrently
    const weatherDataPromises = paginatedCities.map(async (city) => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const response = await axios.get(apiUrl);
      return response.data;
    });

    const weatherData = await Promise.all(weatherDataPromises);

    res.json({
      data: weatherData,
      page,
      pageSize,
      totalCities: citiesArray.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Detailed Forecast for X Days:
//detailed forecast for a specified number of days
// localhost:3000/api/forecast/mumbai
app.get("/api/forecast/:city", async (req, res) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const city = req.params.city;
    const forecastDays = parseInt(req.query.days) || 5;

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    const forecastData = response.data;

    const detailedForecast = forecastData.list.slice(0, forecastDays);

    res.json({ city, forecastDays, data: detailedForecast });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//API endpoint to filter weather data by city, date, and moment
// http://localhost:3000/api/weather/filter?city=bangalore&date=2023-11-16
app.get("/api/weather/filter", async (req, res) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const city = req.query.city;
    const date = req.query.date;
    const moment = req.query.moment;

    if (!city || (!date && !moment)) {
      return res
        .status(400)
        .json({ error: "City and either date or moment are required" });
    }

    let apiUrl;

    if (date) {
      // Filter by date
      apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    } else if (moment) {
      // Filter by moment
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    }

    const response = await axios.get(apiUrl);
    const filteredData = response.data;

    res.json({ city, date, moment, data: filteredData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Current Weather Conditions of a Specific City:
app.get("/api/weather/:city", async (req, res) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY; // Get your API key from the weather data provider
    const city = req.params.city;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    res.json({ data: weatherData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
