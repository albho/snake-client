const net = require("net");
const CLIENT_NAME = "ALB";

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
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
