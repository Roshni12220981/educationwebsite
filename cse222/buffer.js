//To create a buffer of sixe 4 bytes
const buffer = Buffer.alloc(4);
console.log(buffer);
//Writing data to the buffer
buffer.write("Hello","utf-8");
//Reading the data from the buffer
const data = buffer.toString('utf-8');
console.log(data);
console.log(buffer);

//Concatenating Buffers
const buffer1 = Buffer.from("Hello ","utf-8");
const buffer2 = Buffer.from("World","utf-8");
//Concatenating buffers
const concatenatedBuffer = Buffer.concat([buffer1 , buffer2]);
console.log(concatenatedBuffer.toString('utf-8'));
//output: Hello World