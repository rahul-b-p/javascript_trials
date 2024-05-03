exp = '*+10*2+5'

// eval -predefined function to evaluate the expression
try{
    result = eval(exp)
    console.log(result);
}
// catch block only works when there is an error happen in try block
catch{
    console.log('Check the eval expression');
}
// finally block works in any condition
finally{
    console.log('Task Completed');
}