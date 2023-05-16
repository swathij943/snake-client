// establishes a connection with the game server
const net = require("net");

//establish a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541 
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };