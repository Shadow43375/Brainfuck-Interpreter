function intrepretBrainFuck(input) {
const NUMBER_OF_CELLS = 20;
let output = "";
let memoryPointer = 0;
let instructionPointer = 0;
let cells = Array(NUMBER_OF_CELLS).fill(0);
let stack = [];
  
function parse(input) {
let re = /[><\+\-\[\]\.]/gi;
input = input.match(re).join('');
return input;
  }
input = parse(input);
  
while(input[instructionPointer]) {
switch(input[instructionPointer]) {
case ">":
if(memoryPointer < NUMBER_OF_CELLS - 1) {
memoryPointer++;          
        }
break;
      
case "<":
if(memoryPointer > 0) {
memoryPointer--;          
        }
break;
        
case "+":
cells[memoryPointer]++;
break;
        
case "-":
cells[memoryPointer]--;
break;
        
case ".":
console.log(cells[memoryPointer]);
break;
        
case ",":
break;
        
case "[":
if(cells[memoryPointer] !== 0) {
stack.push(instructionPointer- 1);
        }
else if(cells[memoryPointer] === 0) {
while(input[instructionPointer] !== "]") {
instructionPointer++;
          }
        }
break;
        
case "]":
if(cells[memoryPointer] !== 0) {
instructionPointer = stack.pop();
        }
else if(cells[memoryPointer] === 0) {
stack.pop();
        }
break;
      
default:
instructionPointer++
    }
 
instructionPointer++;
  }
console.log(cells);
}
 
let program = "+++++ + [> +++++ +++++ < -]> +++++ ."
 
intrepretBrainFuck(program);