const zlib = require('zlib');

//Example data
const input = 'Hello, world!';

//compress the data
zlib.gzip(input,(err,compressedData) => {
    if(err){
        console.error('error compressing data:',err);

    }
    console.log('Compressed data');
});
//decompress the data
rlib.gunzip(compressedData,(err, decompressedData)=>{
    if(err){
        console.error('error decompressing data:',err);
        return;


    }
    console.log('Decompressecd data',decompressedData.toString());
});
