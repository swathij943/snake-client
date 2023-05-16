// establishes a connection with the game server
const net = require("net");

// establish a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541 
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
  });

  return conn;
};

module.exports = { connect };