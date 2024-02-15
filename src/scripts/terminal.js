import { WebContainer } from '@webcontainer/api';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';

let webcontainerInstance;

let terminal;

window.addEventListener('load', async () => {

    const terminalEl = document.querySelector('.terminal');

    webcontainerInstance = await WebContainer.boot();

    const exitCode = await echo();
    if (exitCode !== 0) {
        terminalEl.innerHTML = 'Failed to run echo command';
        return;
    }

    terminalEl.innerHTML = '';

    terminal = new Terminal({
        convertEol: true,
    });

    const fitAddon = new FitAddon();

    terminal.loadAddon(fitAddon);
    terminal.open(terminalEl);

    fitAddon.fit();

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

async function startShell(terminal) {
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