const url = require('url');
const express = require('express');
const router = express.Router();
const needle = require('needle');

// environment variables
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

router.get('/', async (req, res) => {
  try{
    console.log('got here')
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query
    });
    const response = await needle('get', `${API_BASE_URL}?${params}`);
    const data = response.body;
    if(process.env.NODE !== 'production'){
      console.log(`REQUEST: ${API_BASE_URL}?${params}`)
    }
    res.status(200).json(data);
  } catch(error){
    res.status(500).json({message: 'server error'})
  }
})

module.exports = router;