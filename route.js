const express = require('express');
const router = express.Router();
const {
    getFunFact,
    checkIfPrime,
    checkIfComplete,
    checkifOddOrEven,
    checkIfArmStrong,
    checkdigitsum,
    getProperties
  } = require('./maths');

router.get('/api/classify-number/:number', async (req,res)=>{

const num = parseInt(req.params.number);

    if (isNaN(num)) {
        return res.status(400).json({
            "number": number,
            "error": true
        });
    }

    const funFact = await getFunFact(num);
    const prime = checkIfPrime(num);
    const perfect = checkIfComplete(num);
    const properties = getProperties(num);
    const digitSum = checkdigitsum(num);

    res.status(200).json({
        "number": num,
        "is_prime": prime,
        "is_perfect": perfect,
        "properties": properties,
        "digit_sum": digitSum,
        "fun_fact": funFact
    });
  
})

module.exports = router;
