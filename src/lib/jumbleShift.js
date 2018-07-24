/**
 * Created by hafizur.rahman on 06/06/2018.
 */

function jumbleShift(inputString, numberOfShifts) {
  return new Promise((resolve, reject) => {
    let outputString = '';
    if (numberOfShifts === undefined || numberOfShifts < 0 || numberOfShifts > 1000) {
    reject('numberOfShifts must be in the range of [0, 1000]. Please try again.');
    }
    inputString = inputString.replace(/[^a-z0-9' ']/gi, '');
  	for (let i = 0; i < inputString.length; i ++) {
  		let char = inputString[i];
  		if (char.match(/[a-z]/i)) {
  			let code = inputString.charCodeAt(i);
  			if ((code >= 65) && (code <= 90))
  				char = String.fromCharCode(((code - 65 + numberOfShifts) % 26) + 65);
  			else if ((code >= 97) && (code <= 122))
  				char = String.fromCharCode(((code - 97 + numberOfShifts) % 26) + 97);
  		}
  		outputString += char;
  	}
  	resolve(outputString);
  });
}
module.exports = jumbleShift;
