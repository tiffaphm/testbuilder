// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  if (checkAmericanExpress(cardNumber)) {
      return 'American Express';
  } else if (checkDinersClub(cardNumber)) {
      return 'Diner\'s Club';
  } else if (checkSwitch(cardNumber)) {
    return 'Switch';
  } else if (checkChinaUnionPay(cardNumber)) {
    return 'China UnionPay';
  } else if (checkVisa(cardNumber)) {
      return 'Visa';
  } else if (checkMasterCard(cardNumber)) {
      return 'MasterCard';
  } else if (checkDiscover(cardNumber)) {
      return 'Discover';
  } else if (checkMaestro(cardNumber)) {
      return 'Maestro';            
  } else {
    return 'undefined';
  };

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

function checkAmericanExpress(cardNumber) {
  var numbers = cardNumber.split('');
  var prefix = numbers.slice(0, 2).join('');

  if ((numbers.length === 15) && (prefix === '34' || prefix === '37')) {
    return true;
  } else {
    return false;
  }

};

function checkDinersClub(cardNumber) {
  var numbers = cardNumber.split('');
  var prefix = numbers.slice(0, 2).join('');

  if ((numbers.length === 14) && (prefix === '38' || prefix === '39')) {
    return true;
  } else {
    return false;
  }
};

function checkVisa(cardNumber) {
  var numbers = cardNumber.split('');
  var prefix = numbers[0];

  if ((prefix === '4') && (numbers.length === 13 || numbers.length === 16 || numbers.length === 19)) {
    return true;
  } else {
    return false;
  }
};

function checkMasterCard(cardNumber) {
  var numbers = cardNumber.split('');
  var prefix = numbers.slice(0, 2).join('');

  if ((numbers.length === 16) && (prefix <= '55') && (prefix >= '51')) {
    return true;
  } else {
    return false;
  }
};

function checkDiscover(cardNumber) {
  var numbers = cardNumber.split('');
  var prefix1 = numbers.slice(0, 4).join('');
  var prefix2 = numbers.slice(0, 3).join('');
  var prefix3 = numbers.slice(0, 2).join('');

  if (((prefix1 === '6011') || (prefix2 <= '649' && prefix2 >= '644') || (prefix3 === '65')) && ((numbers.length === 16) || (numbers.length === 19))) {
    return true;
  } else {
    return false;
  }
};

function checkMaestro(cardNumber) {
  var numbers = cardNumber.split('');
  var prefix = numbers.slice(0, 4).join('');

  if ((prefix === '5018' || prefix === '5020' || prefix === '5038' || prefix === '6304') && (numbers.length <= 19) && (numbers.length >=12)) {
    return true;
  } else {
    return false;
  }
};

function checkChinaUnionPay(cardNumber) {
  var numbers = cardNumber.split('');
  var prefix1 = numbers.slice(0, 6).join('');
  var prefix2 = numbers.slice(0, 3).join('');
  var prefix3 = numbers.slice(0, 4).join('');

  if (cardNumber.length >= 16 && cardNumber.length <= 19) {
    if (prefix1 >= '622126' && prefix1 <= '622925') {
      return true;
    } else if (prefix2 >= '624' && prefix2 <= '626') {
      return true;
    } else if (prefix3 >= '6282' && prefix3 <= '6288') {
      return true;
    } 
  } else {
    return false;
  }
};

function checkSwitch(cardNumber) {
  var numbers = cardNumber.split('');
  var prefix1 = numbers.slice(0, 4).join('');
  var prefix2 = numbers.slice(0, 6).join('');

  if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
    if (prefix1 === '4903' || prefix1 === '4905' || prefix1 === '4911' || prefix1 === '4936' || prefix1 === '6333' || prefix1 === '6759') {
      return true;
    } else if (prefix2 === '564182' || prefix2 === '633110') {
      return true;
    }
  } else {
    return false;
  }
};

