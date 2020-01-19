let standard_input = process.stdin;

let i=0,totalNotes=0;
let noteMutiples=[1000,500,100,50,10,5,2,1];

function calculateNotes(amount){
    let reminder;
    if(isNaN(amount)){
        return 0;
    }
    amount=parseInt(amount);
    if(amount>0){
        if(amount>=noteMutiples[i]){
            let calcNotes=amount/noteMutiples[i];
            reminder=amount%noteMutiples[i];
            amount=reminder;
            totalNotes=totalNotes+calcNotes;
            console.log(`${parseInt(calcNotes)} notes of ${noteMutiples[i]} `);
        }
        i++;
        calculateNotes(amount);
        return parseInt(totalNotes);
    }else{  
        return -1;
    }
}

console.log("Enter Change in Rs.");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        console.log("Total No. of notes",calculateNotes(data.toString().trim()));
        process.exit();
    }
});