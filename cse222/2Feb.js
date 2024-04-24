//This was an Synchronous callback function
// function parentFunction(name,callback){
//     callback();
//     console.log("Hey " + name);
// }
// function randomFunction(){
//     console.log("Hey I am callbackFunction");
// }
// parentFunction("Random String",randomFunction);

function parentFunction(name,callback){
    setTimeout(callback,1000);
    console.log("Hey " + name);

}
//function randomFunction(){
    console.log("Hey i am callbackFunction");
//}
//Declaring randomFunction inside parentfunction
parentFunction("Random String", function ()->function{
    console.log("Hey i am callbackFunction");
});

//Whole function into an arrow fucntion
const parentfunction = (name,callback)=>
(setTimeout)


