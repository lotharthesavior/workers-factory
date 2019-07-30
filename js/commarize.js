function commarize(min) {
  min = min || 1e3;
  // Alter numbers larger than 1k
  if (this >= min) {
    var units = [
      " Thousand",
      " Million",
      " Billion",
      " Trillion",
      " Quadrillion",
      " Quintillion",
      " Sextillion",
      " Septillion",
      " Octillion"
    ];

    var order = Math.floor(Math.log(this) / Math.log(1000));

    var unitname = units[(order - 1)];
    // var num = Math.floor(this / 1000 ** order);
    var num = this / 1000 ** order;

    // output number remainder + unitname
    return num.toFixed(3) + unitname
  }

  // return formatted original number
  return this.toLocaleString()
}

// Add method to prototype. this allows you to use this function on numbers and strings directly
Number.prototype.commarize = commarize
String.prototype.commarize = commarize
