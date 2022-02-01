function document_send_event(name, detail) {
    let event = new CustomEvent(name, {detail: detail})
    document.dispatchEvent(event);
}

/// 运行指定语言的代码
async function do_run_code(lang) {
    const code = codeEditor.getValue();
    const stdin = stdinEditor.getValue();
    const args = document.querySelector("#args").value;

    document_send_event(`c_job_add_${lang}`, {
        code: code,
        stdin: stdin,
        args: args
    })
}

async function show_c_asm() {
    const code = codeEditor.getValue();
    document_send_event(`c_job_show_c_asm`, {code: code,})
}

document.addEventListener('c_stdout', function (event) {
    const stdout = event.detail.stdout;
    stdoutEditor.setValue(stdout);
})

document.addEventListener('c_stderr', function (event) {
    const stderr = event.detail.stderr;
    stderrEditor.setValue(stderr);
})
