const net = require("net");
const { IP, PORT, CLIENT_NAME } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected!");
    conn.write(`Name: ${CLIENT_NAME}`);
  });

  conn.on("data", msg => {
    console.log(`Server message: ${msg}`);
  });

  conn.on("end", () => {
    console.log("Ended!");
  });

  return conn;
};

module.exports = connect;
