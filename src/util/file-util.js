import * as fs from "fs";

export async function getJsonKeyFromFile(filename) {
  var r1 = await readJsonDataFromFilename(filename, "utf8");
  var r2 = r1.trim();
  var r3 = JSON.parse(r2);
  var r4 = r3.key;
  return r4;
}

export async function readJsonDataFromFilename(fileName, type = "utf8") {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

export async function writeJsonDataToFilename(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
