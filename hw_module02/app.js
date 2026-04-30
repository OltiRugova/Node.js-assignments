const fs = require('fs');
const args = process.argv;

file = process.argv[2];
line = process.argv[3];

fs.stat(file, (err, data) => {
    if(err){
        if(err.code === 'ENOENT'){
            console.log('File nuk ekziston!');
            createFile(file, line);
        }else{
            console.log("Ka ndodhur gamin: " , err);
        }
    }else{
        console.log('File ekziston!');
        appendData(file, line);
    }
})

function appendData(file, line){
    fs.appendFile(file, `${line} \n`, (err) => {
        if (err) console.log(err);
        else console.log('Te dhenat u shtuan!')
    });
}

function createFile(file, line){
    fs.writeFile(file, `${line} \n`, (err) => {
        if (err) console.log(err);
        else console.log('U krijua file dhe u shtuan te dhenat!')
    });
}