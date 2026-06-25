const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");

// ✅ IMPORT CONTROLLERS CORRECTLY
const businessScraperController = require(
  "../controllers/businessScraper.controller"
);

// 🔥 SCRAPE + SAVE
router.get(
  "/scrape",
  auth,
  businessScraperController.scrapeAndSaveBusinesses
);

// 🔥 FETCH SAVED
router.get(
  "/saved",
  auth,
  businessScraperController.getSavedBusinesses
);

module.exports = router;
