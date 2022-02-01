CodeMirror.autoLoadMode(codeEditor, "rust");
// https://codemirror.net/mode/rust/index.html
codeEditor.setOption("mode", "rust")
codeEditor.setValue(`
fn main() {
    println!("hello Rust!");
}
`);
