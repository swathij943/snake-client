let connection;

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
  } else if (key === "l") {
    connection.write("Say: Hello SNK!");
  } else if (key === "k") {
    connection.write("Say: Goodbye!SNK");
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