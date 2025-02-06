const axios = require('axios');

const getFunFact =  async(number) => {
try {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    return response.data;
} catch (error) {
    console.error('Error fetching Fun Fact', error.message);
    return 'Could not retrieve fun fact';
}
}


const checkIfPrime =(number)=>{
    if(number < 2) return false;
    for (let index = 2; index < number; index++) {
      if(number % index === 0) {
       return false
      }else{
        return true
      }
        
    }
}

const checkIfComplete = (number)=>{
if(number< 1) return false;
    let sum = 0 

for (let i = 1; i < number; i++) {
    if (number % i === 0 ) {
       sum += i;
     }   
}
return sum === number
}

const checkifOddOrEven = (number)=>{
    if(number< 1) return false;
    if(number % 2 === 0){
        return "even"
    }else{
        return "odd"
    }
}

const checkIfArmStrong = (number) => {
  
    const digits = number.toString().split('').map(Number);
    const numDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, numDigits), 0);
  
  if(sum === number){
      return"armstrong"
  }else{
      return""
  }
  }

  const checkdigitsum = (number) => {
    const digits = number.toString().split('').map(Number);
    const sum = digits.reduce((acc, digit) => acc += digit, 0);

    return sum;
  }

  const getProperties = (number) => {
    const properties = [];

    const oddOrEven = checkifOddOrEven(number);
    const armstrong = checkIfArmStrong(number);

    if (armstrong) properties.push(armstrong);
    properties.push(oddOrEven);

    return properties;
}
module.exports = {
    getFunFact,
    checkIfPrime,
    checkIfComplete,
    checkifOddOrEven,
    checkIfArmStrong,
    checkdigitsum,
    getProperties
  };