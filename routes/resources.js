const express = require('express');
const router = express.Router();
const Resource = require("../models/resources.js")

// Get all resources
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    }catch (err) {
        console.log(err)
    }
});



// GET resources by type
router.get('/type/:type', async (req, res) => {
    const { type } = req.params;
  
    try {
      const resources = await Resource.find({ type: type });
      res.json(resources);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;