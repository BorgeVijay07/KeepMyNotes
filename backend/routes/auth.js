const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        a: 'vijay',
        number: 90
    }
    res.json(obj)
})

module.exports = router