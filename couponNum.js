let standard_input = process.stdin;

class CouponNumber{
  let totalRandgen,
  let randomArr,
  static findCouponNumber(){
    // for (i = 0; i < data; i++) {
    //   let random = Math.random();
    //   totalRandGen++;
    //   if (random == randomArr[i]) {
    //     randomArr[i] = random.toFixed(2);  
    //   }
    // }
    console.log(totalRandgen,randomArr);
  }
}
console.log("Enter number N:");
standard_input.on("data", function(data) {
  if (data === "exit\n") {
    process.exit();
  } else {
    console.log(CouponNumber.findCouponNumber());
    process.exit();
  }
});
