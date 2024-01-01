/* Write a JS Program which satisfying the following conditions. (Please Note: Its a single program)

1. An IIFE which prints a console message "Loading User Details..."

2. A function which prints a greeting message with users full name on getting first name and second name as parameters. (Implement the concept of closure (fn within fn), arrow functions,  here)

3. The greeting message should be stored in a variable. The scope of the variable which holds the value for the greeting message should not be global..

Expected Output pattern:
Loading User Details...
Name: GREETING_MSG FIRST_NAME SECOND_NAME */

(function() {
    console.log('Loading User Details...');
})();

function fullname(fname,sname){
    let greeting = 'Good morning'
    const joinName = (fname, sname) => {
        return fname+' '+sname
    }
    let myName = joinName(fname,sname)
    console.log('Name: '+greeting+' '+myName);
}

fullname('Archana', 'J')