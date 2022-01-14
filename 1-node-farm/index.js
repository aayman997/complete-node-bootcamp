const fs = require('fs');
const http = require('http');

////////////////////////////////////////////////
/*    Files    */
/*    Blocking, Synchronous Way    */
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about Avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written');

////////////////////////////////////////////////
/*    Non-Blocking, Asynchronous Way    */
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
// 	if ( err ) return console.log('Error! 💣');
// 	fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
// 		console.log(data2);
// 		fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
// 			console.log(data3);
//
// 			fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
// 				console.log('Your file has been written 🙂');
// 			});
// 		});
// 	});
// });
// console.log('Will Read file!');

////////////////////////////////////////////////
/*    Server    */
const server = http.createServer((req, res) => {
	console.log(req);
	res.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', () => {
	console.log('listening to requests on port 8000');
});