let standard_input = process.stdin;
standard_input.setEncoding("utf-8");

// Prompt user to input data in console.
console.log("Please input username");

// When user input data and click enter key.
standard_input.on("data", function(data) {
  // User input exit.
  if (data === "exit\n") {
    process.exit();
  } else {
    console.log("Hello",data);
    process.exit();
  }
});
