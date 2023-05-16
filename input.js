let connection;

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

// function to handle user input
const handleUserInput = function (key) {
  if (key === "\u0003") {
    // check for ctrl+c input (ASCII code 3)
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  }
};

module.exports = { setupInput };