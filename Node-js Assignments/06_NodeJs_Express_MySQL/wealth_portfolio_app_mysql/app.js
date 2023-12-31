const express = require("express");
const dotenv = require("dotenv");
const portfolioRoutes = require("./routes/wealthPortfolioRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
