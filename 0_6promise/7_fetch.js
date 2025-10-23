/*
The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 
It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers 
— even if the server response is an HTTP error status. 
You can also optionally pass in an init options object as the second argument (see Request).
*/

//for fetch we have its own queue called microtask queue which has higher priority than the macrotask queue where setTimeout etc are present
//its executed first even before the macrotask queue(setTimeout etc) when the call stack is empty