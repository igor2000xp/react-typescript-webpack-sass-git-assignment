import * as server from 'http';

export const printRequest = async (req:server.IncomingMessage) => {
  return new Promise((resolve, reject) => {
    try {
      let data = "";
      req.on("data", chunk => {
        data += chunk.toString();
      });
      req.on("end", () => {
        console.log(JSON.parse(data.toString()));
      });
    } catch ( err ) {
      console.log(err);
    }
  })
}
