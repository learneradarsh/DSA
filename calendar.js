let standard_input = process.stdin;
let inputArr = [];
class Calendar {
    constructor(month, year) {
        this.month = month;
        this.year = year;
    }
    validateInput() {
        if (isNaN(this.month) || isNaN(this.year)) {
            return -1;
        }
        this.month = parseInt(this.month);
        this.year = parseInt(this.year);
    }
    printCalendar() {
        let firstDay = (new Date(this.year, this.month)).getDay();
        let daysInMonth = 32 - new Date(this.year, this.month, 32).getDate();
        console.log(firstDay,daysInMonth);
    }
}

console.log("Enter Month & Year separted by space");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inputArr = data.toString().trim().split(' ');
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