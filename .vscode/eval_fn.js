"use strict"      
var a=2;
console.log(a);
eval("var a=3;");
console.log(a);

// It there is no "use strict" mode then the outputs are 2 & 3.
// But if the "use strict" mode is present then both the outputs will be 2(i.e, 2 & 2).
//This is because the "use strict" mode does not allow to add such features inside its body.