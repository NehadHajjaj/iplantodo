// console.log("App running!");

// import * as jf from "./core/index";

// var slowcar = new jf.Vehicle("Logan");
// slowcar.move(); 

// export default jf;

import * as jf from "./core/index";

(<any>window).jf = jf;
// namespace app {
//     export var x = jf;
// }