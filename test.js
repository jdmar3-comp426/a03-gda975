import mpg_data from "./src/medium/data/mpg_data.js";
import {searchHighPower} from "./src/medium/medium_3.js";

console.log(mpg_data.length); 
searchHighPower(mpg_data, 220, 100000);
console.log(mpg_data.length); 