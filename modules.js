//import and export es modules
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}


//for the import part we do
import {add, multiply} from "./one.js";

onsole.log(add(3, 5)); // 8
console.log(multiply(2, 4)); // 8

//the index.htrml shpould have : <script type="module" src="main.js"></script>