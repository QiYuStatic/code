let codeEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    styleActiveLine: {nonEmpty: true},
    theme: "monokai",
    indentUnit: 4,
    smartIndent: true,
    tabSize: 4,
    indentWithTabs: false,
});

const stdioOptions = {
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    styleActiveLine: {nonEmpty: true},
    mode: "text/plain",
    theme: "monokai",
};

let stdinEditor = CodeMirror.fromTextArea(document.getElementById("stdin"), stdioOptions)

let stdoutEditor = CodeMirror.fromTextArea(document.getElementById("stdout"), stdioOptions);
stdoutEditor.setOption("readOnly", true);

let stderrEditor = CodeMirror.fromTextArea(document.getElementById("stderr"), stdioOptions);
stderrEditor.setOption("readOnly", true);
