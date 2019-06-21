/* Props  : Passing value to the components
We pass props by setting key value pair as we do with html, like id, class,etc.
Key can be any thing we like, title= "Indecision App"
we can access these props(key values) as we do for normal classes by using "this." + "props" i.e. this.props.key

*/ 
//Creating React Component Class

//Notes: for React Components we need uppercase letter to define class.
//React uses Uppercase letter to differentiate between html tags and reacts components
/** Local Storage
 * it's "key" "value" store
 * to store "value", we do need key.
 * It only returns String data
 * to fetch the value we just need key e.g.
 * Saving Values
 * ****************
 * >localStorage.setItem('name','Naveed')
 * Retreiving Values
 * *****************
 * >localStorage.getItem('name')
 * retruns> "Naveed"
 * after Refresh
 * this will return value even after pageload / refresh
 * >localStorage.getItem('name')
 * retruns> "Naveed"
 * REmove Items from local storage:
 * *******************************
 * >localStorage.removeItem('name')
 * >localStorage.getItem('name')
 * retruns> null
 * It Only Return String Items e.g.:
 * >localStorage.setItem('age',26)
 * >localStorage.getItem('age')
 * "26"
 * 
*/
/*
JSON DATA
***********
String representation of JavaScript Object Notation
****************************************************
it saves object in string foramt, like this:

JSON.stringify // this will retrun JSObject in string format like this:
JSON.stringify({age:26});
returns>"{"age":26}"
const json=JSON.stringify({age:26});
>json
>"{"age":26}"
////// Notes: JSON.parse // this will return true JS object
>JSON.parse(json)
returns>Object {age:26}
>JSON.parse(json).age
>26
*/
