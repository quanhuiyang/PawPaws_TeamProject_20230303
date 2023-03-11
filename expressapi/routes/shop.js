const express = require('express');
const router = express.Router();
const db = require('../models/myconnection');

router.get('/', async (req, res) => {
  // console.log(process.env.DB_Password);
  // res.send('shop page');
  const sql = "SELECT * FROM `shop`"; 
  const [rows, fields] = await db.query(sql);
  res.json(rows);
});

module.exports = router;
