// let arr_fr={"Orange","Apple","Mango"};
// let removed = fruits.splice(1,2,"Orange","Apple");
// let moreFruits=["banana","none"];
// let allFruits = fruits.concat(moreFruits);

// let citrus = fruits.slice(1,3);
// console.log(citrus);

// const multiply = function(a,b){ 
//     int c = a*b; 
//     console.log(c);
// }

try{
    //Code that can throw error
    throw new Error("This is an error");
}catch(error){
    //code to handle the error
    console.error(error.message);

}finally{
    //code that will run regardless of whether there was an error
    console.log("cleanup code");
}

const delayedFunction = () => {
    console.log("Delayed function executed");
};
setTimeout(delayedFunction,2000);