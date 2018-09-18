process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  const currentDir = process.cwd();

  process.stdout.write('You typed: ' + cmd + '/////////');
  process.stdout.write('You typed: ' + currentDir);

  process.stdout.write('\nprompt > ');
});
