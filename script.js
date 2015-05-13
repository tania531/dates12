

function CalcDate(y, m, d){
  var now = new Date();
  console.log('now', now);
  // console.log('now.getTime() / 1000: ', now.getTime() / 1000);
  // var then = new Date(2015,04,12);
  var then = new Date(y,m,d);
  console.log('then', then);
  // console.log('then.getTime() / 1000: ', then.getTime() / 1000);

  var nowSeconds = now.getTime() / 1000;
  var thenSeconds = then.getTime() / 1000;
  var diffSeconds = nowSeconds - thenSeconds;
  var nowDays = nowSeconds / (3600 * 24);
  var thenDays = thenSeconds / (3600 * 24);
  // console.log('nowDays: ', nowDays);
  // console.log('thenDays: ', thenDays);

  var diffDays = diffSeconds / (3600 * 24);
  diffDays = Math.ceil(diffDays);

  var nowMonths = nowDays / 30;
  var thenMonths = thenDays / 30;

  var nowYears = nowMonths / 12;
  var thenYears = thenMonths / 12;
  var diffYears = nowYears - thenYears;
  diffYears = Math.floor(diffYears);
  var diffMonths = nowMonths - thenMonths - (diffYears *12);
  diffMonths = Math.ceil(diffMonths);
  console.log('diffMonths: ', diffMonths);
  // console.log('nowMonths: ', nowMonths);
  // console.log('thenMonths: ', thenMonths);
  console.log('nowYears: ', nowYears);
  console.log('thenYears: ', thenYears);
  console.log('diffYears: ', diffYears);

  var diffDays2 = nowDays - thenDays;
  diffDays2 = Math.ceil(diffDays2);
  diffDays2 = diffDays2 - (diffMonths *30);
  console.log('diffDays2: ', diffDays2);

  switch(true){
    case (diffDays > 364):
      // return diffYears;
      console.log("time difference: ", diffYears + " year(s), " + diffMonths + " month(s), " + diffDays2 + " day(s)");
      break;
    case (diffDays2 > 30 && diffDays2 < 365):
      // return diffMonths;
      console.log("time difference: ", diffMonths + " month(s), "+ diffDays2 + " day(s)");
      break;
    default:
      // return diffDays;
      console.log("time difference: ",  diffDays2 + " day(s)");

  }
}

var newDate = CalcDate(2015,01,12);
