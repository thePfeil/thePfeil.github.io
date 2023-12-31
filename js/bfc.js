var out = document.getElementById("out");
var inp = document.getElementById("inp");
var inp2 = document.getElementById("inp2");
function compile(program) {
    let tape = Array(100).fill(0);
    let ptr = 0;
    let isLooping = false;
    let loopStack = [];
    let innerLoops = 0;
    var plu = 0;

    for (i = 0; i < program.length; i++) {

        const char = program[i];

        if (isLooping) {
            if (char === "[") innerLoops++;
            if (char === "]") {
                if (innerLoops === 0) isLooping = false;
                else innerLoops--;
            }
            continue;
        }

        switch (char) {
            case '+':
                tape[ptr]++;
                break;
            case '-':
                tape[ptr]--;
                break;
            case ',':
                tape[ptr] = inp2.value[plu].charCodeAt();
                plu++;
                break;
            case '.':
                out.innerHTML = out.innerHTML + String.fromCharCode(tape[ptr]);
            case '>':
                ptr++;
                tape[ptr] = tape[ptr] || 0;
                break;
            case '<':
                ptr--;
                tape[ptr] = tape[ptr] || 0;
                break;
            case '[':
                tape[ptr] === 0
                ? isLooping = true: loopStack.push(i);
                break;
            case ']':
                tape[ptr] !== 0
                ? i = loopStack[loopStack.length-1]: loopStack.pop();
                break;
                default:
                break;
        }
    }
}
function clear1() {
    var out = document.getElementById("out");
    out.innerHTML = "";
    plu = 0;
}
function start(v) {
    v = inp.value;
    out.innerHTML = "";
    plu = 0;
    compile(v);
}