const db = require("../models/db");

// Get all assets for a user
const getAllAssets = (req, res) => {
  const userId = req.params.userId;

  const query = "SELECT * FROM portfolios WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

// Update an asset
const updateAsset = (req, res) => {
  const assetId = req.params.assetId;
  const { quantity, purchase_price, purchase_date } = req.body;

  const query =
    "UPDATE portfolios SET quantity = ?, purchase_price = ?, purchase_date = ? WHERE id = ?";
  db.query(
    query,
    [quantity, purchase_price, purchase_date, assetId],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json({ message: "Asset updated successfully" });
      }
    }
  );
};

// Delete an asset
const deleteAsset = (req, res) => {
  const assetId = req.params.assetId;

  const query = "DELETE FROM portfolios WHERE id = ?";
  db.query(query, [assetId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "Asset deleted successfully" });
    }
  });
};

// Get income, expenses, and savings for the user in the current financial year
const getFinancialSummary = (req, res) => {
  const userId = req.params.userId;

  // Assuming the financial year is from April to March
  const currentYear = new Date().getFullYear();
  const startDate = `${currentYear - 1}-04-01`;
  const endDate = `${currentYear}-03-31`;

  const query = `
        SELECT
            SUM(CASE WHEN asset_name = 'Income' THEN quantity ELSE 0 END) AS total_income,
            SUM(CASE WHEN asset_name = 'Expenses' THEN quantity ELSE 0 END) AS total_expenses,
            SUM(CASE WHEN asset_name = 'Savings' THEN quantity ELSE 0 END) AS total_savings
        FROM portfolios
        WHERE user_id = ? AND purchase_date BETWEEN ? AND ?
    `;

  db.query(query, [userId, startDate, endDate], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

// Get income, expenses, and savings for the user in a specific month
const getFinancialSummaryByMonth = (req, res) => {
  const userId = req.params.userId;
  const month = req.params.month;

  // Assuming the financial year is from April to March
  const currentYear = new Date().getFullYear();
  const startDate = `${currentYear - 1}-${month}-01`;
  const endDate = `${currentYear}-${month}-31`;

  const query = `
        SELECT
            SUM(CASE WHEN asset_name = 'Income' THEN quantity ELSE 0 END) AS total_income,
            SUM(CASE WHEN asset_name = 'Expenses' THEN quantity ELSE 0 END) AS total_expenses,
            SUM(CASE WHEN asset_name = 'Savings' THEN quantity ELSE 0 END) AS total_savings
        FROM portfolios
        WHERE user_id = ? AND purchase_date BETWEEN ? AND ?
    `;

  db.query(query, [userId, startDate, endDate], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

// Get detailed breakdown of income and expenses for the user in the current financial year
const getDetailedBreakdown = (req, res) => {
  const userId = req.params.userId;

  // Assuming the financial year is from April to March
  const currentYear = new Date().getFullYear();
  const startDate = `${currentYear - 1}-04-01`;
  const endDate = `${currentYear}-03-31`;

  const query = `
        SELECT asset_name, quantity, purchase_price, purchase_date
        FROM portfolios
        WHERE user_id = ? AND (asset_name = 'Income' OR asset_name = 'Expenses') AND purchase_date BETWEEN ? AND ?
    `;

  db.query(query, [userId, startDate, endDate], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

// Get detailed breakdown of income and expenses for the user in a specific month
const getDetailedBreakdownByMonth = (req, res) => {
  const userId = req.params.userId;
  const month = req.params.month;

  // Assuming the financial year is from April to March
  const currentYear = new Date().getFullYear();
  const startDate = `${currentYear - 1}-${month}-01`;
  const endDate = `${currentYear}-${month}-31`;

  const query = `
        SELECT asset_name, quantity, purchase_price, purchase_date
        FROM portfolios
        WHERE user_id = ? AND (asset_name = 'Income' OR asset_name = 'Expenses') AND purchase_date BETWEEN ? AND ?
    `;

  db.query(query, [userId, startDate, endDate], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

const all = (req, res) => {
  wealthModel.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    else res.send(data);
  });
};

const getFiltered = (req, res) => {
  if (req.params.mon == 0) {
    wealthModel.getByYear(req.params.yea, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial.",
        });
      else res.send(data);
    });
  } else {
    wealthModel.getFiltered(req, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial.",
        });
      else res.send(data);
    });
  }
};

module.exports = {
  getAllAssets,
  updateAsset,
  deleteAsset,
  getFinancialSummary,
  getFinancialSummaryByMonth,
  getDetailedBreakdown,
  getDetailedBreakdownByMonth,
  all,
  getFiltered,
};
