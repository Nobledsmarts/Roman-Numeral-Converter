function convertToRoman(num) {
    const numeralsObj = {
      1000 : "M", 900 : "CM", 500 : "D", 400 : "CD", 100 : "C", 90 : "XC", 50 : "L", 40 : "XL", 10 : "X", 9 : "IX", 5 : "V", 4 : "IV", 1 : "I"
    }
    const getClosestNumeral = (n) =>  Object.keys(numeralsObj).filter((e) => e <= n).slice(-1)[0];
  
    let numPlaceholder = num;
    let romanNumeral = "";
  
    while(numPlaceholder >= 1){
      let closestNumeral = getClosestNumeral(numPlaceholder);
      romanNumeral+=(numeralsObj[closestNumeral]);
      numPlaceholder-= closestNumeral;
    }
   return romanNumeral;
}
  
  console.log(convertToRoman(36));
