let standard_input = process.stdin;
let inputArr = []; // to take input from user

class Calendar {
  constructor(month, year) {
    this.month = month;
    this.year = year;
  }

  //method to validate user given input month and year
  validateInput() {
    if (
      isNaN(this.month) ||
      isNaN(this.year) ||
      this.month < 1 ||
      this.month > 12
    ) {
      return -1;
    }
    this.month = parseInt(this.month);
    this.year = parseInt(this.year);
  }

  //method to get the month name in words
  getMonthName(month) {
    switch (month) {
      case 1:
        return "JAN";
      case 2:
        return "FEB";
      case 3:
        return "MAR";
      case 4:
        return "APR";
      case 5:
        return "MAY";
      case 6:
        return "JUN";
      case 7:
        return "JUL";
      case 8:
        return "AUG";
      case 9:
        return "SEPT";
      case 10:
        return "OCT";
      case 11:
        return "NOV";
      case 12:
        return "DEC";
      default:
        return "no month found";
    }
  }

  //method to find year is leap or not
  isLeapYear(year) {
    if (year % 4 == 0) {
      if (year % 100 == 0) {
        if (year % 400 == 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  //method to find get days in a month
  getDaysInMonth(month, year) {
    let daysInMonth = null;
    if (this.isLeapYear(year) && month == 2) {
      daysInMonth = 29;
    } else {
      daysInMonth = new Date(this.year, this.month, 0).getDate();
    }
    return daysInMonth;
  }

  //method to print head section of calendar
  printHead() {
    console.log(
      `% javascript Calendar ${this.month} ${this.year} - ${this.getMonthName(
        this.month
      )} ${this.year}`
    );
    // console.log("Sun Mon Tue Wed Thu Fri Sat");
  }

  //method to get first day of the month by using Gregorian calendar formula
  getFirstDay() {
    let yZero = parseInt(this.year - Math.floor((14 - this.month) / 12));
    let x = parseInt(yZero + Math.floor(yZero / 4) - Math.floor(yZero / 100) + Math.floor(yZero / 400));
    let mZero = parseInt(
      this.month + 12 * Math.floor((14 - this.month) / 12) - 2
    );
    let day = parseInt((1 + x + (31 * mZero) / 12) % 7);
    return parseInt(day);
  }

  //method to print body section of calendar
  printCalendar() {
    this.printHead();
    let firstDay = this.getFirstDay();
    let dates = [[]];
    dates[0][0] = "Sun";
    dates[0][1] = "MON";
    dates[0][2] = "TUE";
    dates[0][3] = "WED";
    dates[0][4] = "THU";
    dates[0][5] = "FRI";
    dates[0][6] = "SAT";
    let date = 1;
    let weekArr = new Array(7);
    while (date <= this.getDaysInMonth(this.month, this.year)) {
      while (
        firstDay < 7 &&
        date <= this.getDaysInMonth(this.month, this.year)
      ) {
        weekArr[firstDay] = date;
        date++;
        firstDay++;
      }
      dates.push(weekArr);
      weekArr = [];
      firstDay = 0;
    }
    let s = "";
    for (let ct = 0; ct < dates.length; ct++) {
      for (let nt = 0; nt < 7; nt++) {
        if (dates[ct][nt] == undefined) {
          dates[ct][nt] = "";
        }
        s = s + dates[ct][nt] + "\t";
      }
      s = s + "\n";
    }
    console.log(s);
  }
}

console.log("Enter Month & Year separted by space");
standard_input.on("data", function (data) {
  if (data.toString().trim() === "exit") {
    process.exit();
  } else {
    inputArr = data
      .toString()
      .trim()
      .split(" ");
    const calendar = new Calendar(inputArr[0], inputArr[1]);
    if (calendar.validateInput() != -1) {
      calendar.printCalendar();
      process.exit();
    } else {
      console.log("Invalid input");
      process.exit();
    }
  }
});
