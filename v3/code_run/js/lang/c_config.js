CodeMirror.autoLoadMode(codeEditor, "clike");

codeEditor.setOption("mode", "text/x-csrc")
codeEditor.setValue(`#include <stdio.h>

int main(int argc, char * argv[]) {
    printf("hello C!\\n");
    return 0;
}
`);
