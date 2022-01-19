// setup interface to handle user input from stdin
const setupInput = function () {
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
};

module.exports = setupInput;
