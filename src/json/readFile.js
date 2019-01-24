
import favids from "./../../data/in/fvid.json";
import { writeJsonDataToFilename } from '../util/file-util'

const fn = 'test'

async function readFavorites() {

  let json = JSON.stringify(favids)
  let filename = './data/out/' + fn + '.json'
  await writeJsonDataToFilename(filename, json)
}

async function go() {
  await readFavorites()
}

go()
