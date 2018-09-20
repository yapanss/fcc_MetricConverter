/*
*
*
*       Complete the handler logic below
*       
*       
*/

const isChar = require('./isChar')

function ConvertHandler() {
  
  var that = this
  this.getNum = function(input) {
    var result;
    var inputArray = input.split('')
    
    var i = 0
    while(i<inputArray.length && !isChar(inputArray[i])) {
      i=i+1
    }

    var number = input.substr(0,i)
    
    if (number == "") {
      initNumber = 1
    } else {
      var numberSplit = number.split('/')

      if (numberSplit.length==2) {
        initNumber = Number(numberSplit[0])/Number(numberSplit[1])
      } else if (numberSplit.length == 1) {
        initNumber = Number(numberSplit[0])
      } else {
        initNumber = Number(number)
      } 
    }

    result = initNumber
    return result

  };
  
  this.getUnit = function(input) {
    var result;
    var inputArray = input.split('')
    var unitArray = ["mi","km","gal","lbs","l","kg"]

    var i = 0
    while(i<inputArray.length && !isChar(inputArray[i])) {
      i=i+1
    }

    var unit = input.substr(i)
    var lowerUnit = unit.toLowerCase()
    if (unitArray.indexOf(lowerUnit) == -1) {
      result = undefined
    } else result = unit;

    return result
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;

    if(initUnit) {
      switch (initUnit.toLowerCase()) {
      case "mi":
        result = "km"
        break
      case "km":
        result = "mi"
        break
      case "lbs":
        result = "kg"
        break
      case "kg":
        result = "lbs"
        break
      case "gal":
        result = "l"
        break
      case "l":
        result = "gal"
    }
    return result;
  };
    }
    

  this.spellOutUnit = function(unit) {
    var result;
    
    switch (unit.toLowerCase()) {
      case "mi":
        result = "miles"
        break
      case "km":
        result = "kilometers"
        break
      case "lbs":
        result = "pounds"
        break
      case "kg":
        result = "kilograms"
        break
      case "gal":
        result = "gallons"
        break
      case "l":
        result = "liters"
    }

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    if (initUnit) {
      switch(initUnit.toLowerCase()) {

      case "mi":
        result = Math.round((initNum*miToKm) *100000)/100000       
        break

      case "km":
        result = Math.round((initNum/miToKm) *100000)/100000       
        break

      case "lbs":
        result = Math.round((initNum*lbsToKg)*100000)/100000
        break

      case "kg":
        result = Math.round((initNum/lbsToKg)*100000)/100000
        break 

      case "gal":
        result = Math.round((initNum*galToL) *100000)/100000       
        break

      case "l":
        result = Math.round((initNum/galToL) *100000)/100000   
      }
    return result;
  };
    }

    
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    if (initNum && !initUnit) {
       result = {"string":"invalid unit"}
    } else if (!initNum && initUnit) {
        result = {"string":"invalid number"}
    } else if (!initNum && !initUnit) {
      result = {"string":"invalid number and unit"}
    } else result = {
                      "initNum":initNum,
                      "initUnit":initUnit,
                      "returnNum":returnNum,
                      "returnUnit":returnUnit,
                      "string":`${initNum} ${that.spellOutUnit(initUnit)} converts to ${returnNum} ${that.spellOutUnit(returnUnit)}`
                    }
    return result;
  };
  
}

module.exports = ConvertHandler;
