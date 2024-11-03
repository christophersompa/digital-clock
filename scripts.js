"use strict";

/* "use strict" is a literal expression that indictes 
 * that the code should be executed in "strict mode".
 * 
 * Strict mode makess it easier to write "secure" javacript,
 * strict mode changes previously accepted "bad syntax" into 
 * real errors.
 * 
 * For example, mistyping a variable name creates a new
 * glabal variable. In strict mode, this will throw an error,
 * making it impossible to accidently create a global varibale.
 * 
 * this should be used at the top of the script file.
 */

/* A variable is a "named storage" for data. We can use variables
to store goodies, visitors, and other data. To create a variable in
JavaScript, use the "let" keyword. The statement below creates 
(in other words: declares) a variable with the name "message": */

let message; 

/* We can put some data into it by using the assignmrnt operator "=" */

message = "Hello";

/* The string is now saved into the memory area associated with
the variable. We can access it using the variable name: */

alert(message);

/* We can also declare multiple variables in one line 
(this is not recommended, for the sake of better readability, please
use a single line per variable): */

/*
let user = "Chris", age = 26, job = "frontend developer"; 
*/

let user = "Chris";
let age = 26;
let job = "frontend developer";

/* We can easily grasp the concept of a "variable" if we imagine it as
a "box" for data, with a uniquely-named sticker on it. For instance,
the variable "message" can be imagined as a box labelled "message"
with the value "Hello" in it. */

/* We can also change it as many times as we want */

job = "backend developer";

/* We can also declare two variables and copy data from one into
the other: */

let job_sector; 

job_sector = job;

/* There are two limitations on variable names in JavaScript: The 
name must contain only letters, digits, or the symbol "$" and "_". And
the first character must not be a digit. Example: */

let userName;
let test123;

/* To declare a constant (unchanging) variable, use "const" 
instead of let. The variable below cannot be reassigned. */

const myBirthday = "24.05.1998";

/* Uppercase constants are used for difficult-to-remember values
that are known before execution. Such constants are named using 
capital letters and underscores. */

const COLOR_ORANGE = "#FFF00";

/* COLOR_RED is much easier to remember than "#FF700". 
It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
When reading the code, COLOR_ORANGE is much more meaningful 
than #FF7F00.*/



