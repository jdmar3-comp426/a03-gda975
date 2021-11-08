import mpg_data from "./src/medium/data/mpg_data.js";
import {searchByYear} from "./src/medium/medium_3.js";

console.log(mpg_data.length); 
console.log(searchByYear(mpg_data, [2009]).length); 