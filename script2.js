

function CalcDate(y, m, d){
  var now = new Date();
  console.log('now', now);

  var then = new Date(y,m,d);
  console.log('then', then);

  var nowSeconds = now.getTime() / 1000;
  var thenSeconds = then.getTime() / 1000;
  var diffSeconds = nowSeconds - thenSeconds;

  var numDays = diffSeconds / (3600 * 24);
  numDays = Math.ceil(numDays);

  var numMonths = numDays / 30;
  var leftDays = numDays % 30;

  numMonths = Math.ceil(numMonths);

  var numYears = numMonths / 12;
  var leftMonths = numMonths % 12;

  numYears = Math.floor(numYears);

  console.log('diffMonths: ', leftMonths);
  console.log('numYears: ', numYears);

  switch(true){
    case (numDays > 364):
      console.log("time difference: ", numYears + " year(s), " + leftMonths + " month(s), " + leftDays + " day(s)");
      break;
    case (numDays > 30 && numDays < 365):
      console.log("time difference: ", numMonths + " month(s), "+ leftDays + " day(s)");
      break;
    default:
      console.log("time difference: ",  numDays + " day(s)");

  }
}

var newDate = CalcDate(2015,02,10);
