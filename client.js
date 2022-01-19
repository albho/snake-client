const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", msg => {
    console.log("Connected!");
  });

  conn.on("data", msg => {
    console.log(`Server message: ${msg}`);
  });

  conn.on("end", msg => {
    console.log("Ended!");
  });

  return conn;
};

module.exports = connect;
