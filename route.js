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

router.get('/api/classify-number/:number?',async (req,res)=>{
  const inputNumber = (typeof req.query.number !== 'undefined') ? req.query.number : '';

  
  if (inputNumber === '' || isNaN(Number(inputNumber)) || !Number.isInteger(Number(inputNumber))) {
    return res.status(400).json({
      number: inputNumber,
      error: true
    });
  }
const num = parseInt(inputNumber);

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
