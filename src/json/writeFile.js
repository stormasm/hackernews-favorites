// import { hget, smembers } from "./../redis/readUtils";
// import { writeAvatar } from "./../user/writeAvatar";
import { writeJsonDataToFilename } from "../util/file-util";
// import repositories from "./../../data/in/v100.json";
const getFavs = require('../hnfa/main')

const user = 'michaelangerman'
//const filename = 'favorites'

async function writeFavories() {

    // let data = await goGql1(repository);

    let data = await getFavs(user, 1)
    console.info('result', data)

    let json = JSON.stringify(data);
    let filename = "./data/out/" + "favorites" + ".json";
    await writeJsonDataToFilename(filename, json);
}

async function go() {
  await writeFavories();
}

go();
