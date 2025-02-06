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

router.get('/api/classify-number',async (req,res)=>{
 

const numberQuery = req.query.number;

if (!numberQuery || isNaN(Number(numberQuery)) || !Number.isInteger(Number(numberQuery))) {
    return res.status(400).json({
      number: numberQuery ? numberQuery: "",
      error: true 
    });
  }
const num = parseInt(numberQuery);

try {
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
} catch (error) {
    return res.status(500).json({
        error: "Internal Server Error",
        message: error.message
      });
}

  
})

module.exports = router;
