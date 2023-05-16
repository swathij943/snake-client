const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event handler for user input
  stdin.on("data", handleUserInput);

  return stdin;
};

// function to handle user input
const handleUserInput = function (key) {
  if (key === "\u0003") {
    // check for ctrl+c input (ASCII code 3)
    process.exit();
  }
};

module.exports = { setupInput };