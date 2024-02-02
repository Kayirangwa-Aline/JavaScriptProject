function solveQuadratic(a, b, c) {
       
  var delta = b * b - 4 * a * c;

  if (delta > 0) {
   
      var root1 = (-b + Math.sqrt(delta)) / (2 * a);
      var root2 = (-b - Math.sqrt(delta)) / (2 * a);
      return [root1, root2];
  } else if (delta === 0) {
  
      var root = -b / (2 * a);
      return [root];
  } else {
    
      var realPart = -b / (2 * a);
      var imaginaryPart = Math.sqrt(Math.abs(delta)) / (2 * a);
      var root1 = realPart + " + " + imaginaryPart + "i";
      var root2 = realPart + " - " + imaginaryPart + "i";
      return [root1, root2];
  }
}


var a = 1;
var b = -3;
var c = 2;

var roots = solveQuadratic(a, b, c);
console.log("Roots:", roots);