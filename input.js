const { MOVEMENT_KEYS } = require("./constants.js");
let connection;

// function to handle user input
const handleUserInput = function (key) {
  console.log(key)
  if (key === "\u0003") {
    // check for ctrl+c input (ASCII code 3)
    process.exit();
  } else {
    connection.write(MOVEMENT_KEYS[key]);
  }
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event handler for user input
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };