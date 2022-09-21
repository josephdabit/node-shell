//Output a prompt
process.stdout.write('prompt > ');

pwd = () => {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();{
        if (cmd == 'pwd') {
            process.stdout.write(process.cwd());
        }
    }
    })
}

module.exports = pwd()