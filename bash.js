//const pwd = require('./pwd');
const ls = require('./ls');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data, file) => {
  const cmd = data.toString().trim(); //remove the newline
  const text = file.toString().trim();
  if (cmd == 'ls') {
    ls()
  }
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
});