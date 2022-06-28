import * as http from 'http';
import {printRequest} from "./printRequest";

const SERVER_PORT = 5000;

const OK_MESSAGE = 'Ok';
const ERROR_MESSAGE = 'bad';

export const httpServer = http.createServer((req, res) => {
  const responseToSend = req.url === '/' && req.method === 'POST' ? OK_MESSAGE : ERROR_MESSAGE;
  const responseMessage = responseToSend === OK_MESSAGE ? 'success' : 'error';
  const responseStatusCode = responseToSend === OK_MESSAGE ? 200 : 500;
  const response = JSON.stringify({status:responseMessage, message:responseToSend});

  printRequest(req);


  res.writeHead(responseStatusCode, {"Content-Type": "application/json"});
  res.end(response);
});

httpServer.listen(SERVER_PORT, () => {
  console.log(`server is running on PORT=${SERVER_PORT}`);
})

console.log('server');
