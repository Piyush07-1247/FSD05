const printmessaage = (msg) => {
    document.writeln(msg);
}
const promise = new Promise((resolve, reject) => {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";  
    if(x === y) {
        resolve();
    } else {
        reject();
    }
});
promise.
then(() => printmessaage('Success, You are a GEEK'))
.catch(() => printmessaage('Some error has occurred'));
// Output: Success, You are a GEEK
// Output: Some error has occurred
// Note: In this case, since x and y are equal, the output will be "Success, You are a GEEK".
