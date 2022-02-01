CodeMirror.autoLoadMode(codeEditor, "javascript");

// https://codemirror.net/mode/javascript/index.html
codeEditor.setOption("mode", "javascript");
codeEditor.setValue(`
console.log("Hello JavaScript!\\n");
`);
