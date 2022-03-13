const { readFile, writeFile } = require("fs").promises;

//const { readFile, writeFile } = require("fs");

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// We can also use const { readFile, writeFile } = require("fs").promises
const start = async () => {
  try {
    const first = readFile('./content/first.txt', 'utf-8');
    const second = readFile('./content/second.txt', 'utf-8');
    await writeFile("./Content/result-async-js.txt",
      `THIS IS GREAT: ${first} ${second}`,
      { flag: 'a' } // Append
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// Introducing promises
// By using the util module, this wrapper function
// is no longer require in otder to work with Async/Await.
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

// getText("./Content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// Async - Await
// const start = async () => {
//     try {
//         const first = await getText("./Content/first.txt");
//         const second = await getText("./Content/second.txt");
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// };

