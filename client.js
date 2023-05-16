// establishes a connection with the game server
const net = require("net");

// establish a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT 
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
    conn.write("Move: up");
  });

  return conn;
};

module.exports = { connect };