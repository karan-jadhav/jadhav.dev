import { WebContainer } from '@webcontainer/api';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';

let webcontainerInstance: WebContainer;

let terminal: Terminal;



window.addEventListener('load', async () => {

    const terminalEl = document.querySelector('.terminal');
    const loaderEl = document.querySelector('.loader');

    webcontainerInstance = await WebContainer.boot();

    const exitCode = await echo();
    if (exitCode !== 0) {
        loaderEl!.innerHTML = 'Failed to run echo command';
        return;
    }

    loaderEl!.remove();
    // remove hidden class from terminal
    terminalEl!.classList.remove('hidden');

    terminalEl!.innerHTML = '';

    terminal = new Terminal({
        convertEol: true,
    });

    const fitAddon = new FitAddon();

    terminal.loadAddon(fitAddon);
    terminal.open(terminalEl as HTMLElement);

    fitAddon.fit();

    terminal.write('Welcome to Jadhav.dev Terminal\n');
    terminal.write("Today's date is: " + new Date().toLocaleDateString() + "\n");

    const shellProcess = await startShell(terminal);

    window.addEventListener('resize', () => {
        fitAddon.fit();
        shellProcess.resize({
            cols: terminal.cols,
            rows: terminal.rows
        });
    });

});


async function echo() {
    const process = await webcontainerInstance.spawn('echo', ['Hello World!']);

    return process.exit;
}

async function startShell(terminal: Terminal) {
    const shellProcess = await webcontainerInstance.spawn('jsh', {
        terminal: {
            cols: terminal.cols,
            rows: terminal.rows,
        },
    });
    shellProcess.output.pipeTo(
        new WritableStream({
            write(data) {
                terminal.write(data);
            },
        })
    );

    const input = shellProcess.input.getWriter();
    terminal.onData((data) => {
        input.write(data);
    });


    return shellProcess;
};