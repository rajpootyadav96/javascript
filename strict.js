// USE STRICT-->
// the directive looks like a string "use strict" or 'use strict'. when it located at top of Script, the whole script works the modern way

// ex
// "use strict";

// this code works the modern way
// ...

// Please make sure that 'use strict' is at the top of your Script otherwise strict mode may not be enabled
// strict mode is not enabled here:
        // alert("some code");
        // "use strict" below is ignored--it must be at the top

        // "use strict";

        // strict mode is not activated
// Only Comment may appear above 'use strict'
// there is no way to cancel use strict
// when u use a developer console to run code, please node taht it doesn't use strict by default
//sometimes , when use strict makes a difference, you'll get incorrect results
//so, how to actually use strict in the console?
//First u can try to pass Shift+Enter to input multiple lines, and put use strict on top, like this;
    // 'use strict'; <Shift+Enter for a newline>
    // //  ...your code
    // <Enter to run></Enter>

//It works in most browers, namely Firefox and Chrome
//if it doesn't e/g/ in an old browser there's an ugly, but reliable way to ensure use strict, Put it iside this kind or wrapper
// (function() {
//     'use strict';
  
    // ...your code here...
//   })()

//Should we “use strict”?
//modern java script supports 'classes' and 'modules' -advanced  language structure
//that enables use strict automatically. so we don't need to add the 'use strict' directive if we use them.
// So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.

