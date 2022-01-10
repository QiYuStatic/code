CodeMirror.autoLoadMode(codeEditor, "python");

// https://codemirror.net/mode/python/index.html
codeEditor.setOption("mode", "python");
codeEditor.setValue(`
print("hello Python!")
`);
