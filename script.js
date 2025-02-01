let Names = []
document.getElementById('text').innerText = 'Your Result';
function Push(){
    let output = document.getElementById('task');
    Names.push(output.value);
    document.getElementById('text').innerText = Names;
}
function Pop(){
    let output = document.getElementById('task');
    Names.pop();
    document.getElementById('text').innerText = Names;
}
function Unshift(){
    let output = document.getElementById('task');
    Names.unshift(output.value);
    document.getElementById('text').innerText = Names;
}
function Shift(){
    let output = document.getElementById('task');
    Names.shift();
    document.getElementById('text').innerText = Names;
}
function Sort(){
    let output = document.getElementById('task');
    Names.sort();
    document.getElementById('text').innerText = Names;
}
function Reverse(){
    let output = document.getElementById('task');
    Names.reverse();
    document.getElementById('text').innerText = Names;
}















// CallBack Functions//

// function display1(Names) {
//     console.log(Names);
// }
// function display2() {
//     display1('Hello ')
// }
// function display3() {
//     display1('World')
// }

// display2()
// display3()
















let Name = ['hamza','anas','muied','ayan','muteeb','muteeb','fahad'];
console.log(Name);
let found = Name.find();
console.log(found);