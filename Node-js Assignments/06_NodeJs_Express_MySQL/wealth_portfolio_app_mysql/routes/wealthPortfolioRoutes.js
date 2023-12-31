const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/wealthPortfolioController");

router.get("/", portfolioController.all);
router.get("/:yea/:mon", portfolioController.getFiltered);

// Get all assets for a user
router.get("/assets/:userId", portfolioController.getAllAssets);

// Update an asset
router.put("/assets/:assetId", portfolioController.updateAsset);

// Delete an asset
router.delete("/assets/:assetId", portfolioController.deleteAsset);

// Get income, expenses, and savings for the user in the current financial year
router.get(
  "/financial-summary/:userId",
  portfolioController.getFinancialSummary
);

// Get income, expenses, and savings for the user in a specific month
router.get(
  "/financial-summary/:userId/:month",
  portfolioController.getFinancialSummaryByMonth
);

// Get detailed breakdown of income and expenses for the user in the current financial year
router.get(
  "/detailed-breakdown/:userId",
  portfolioController.getDetailedBreakdown
);

// Get detailed breakdown of income and expenses for the user in a specific month
router.get(
  "/detailed-breakdown/:userId/:month",
  portfolioController.getDetailedBreakdownByMonth
);

module.exports = router;
