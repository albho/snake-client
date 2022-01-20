let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    console.log("Client manually terminated!");
    process.exit();
  }

  if (key === "w") connection.write("Move: up");
  if (key === "a") connection.write("Move: left");
  if (key === "s") connection.write("Move: down");
  if (key === "d") connection.write("Move: right");

  if (key === "g") connection.write("Say: Hello!");
  if (key === "t") connection.write("Say: I am a snake");
};

module.exports = setupInput;
