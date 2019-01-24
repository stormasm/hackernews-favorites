import { writeJsonDataToFilename } from '../util/file-util'

const getFavs = require('../hnfa/main')

const user = 'michaelangerman'
const fn = 'favorites'

async function writeFavories() {
  let data = await getFavs(user, 1)
  // console.info('result', data)

  let json = JSON.stringify(data)
  let filename = './data/out/' + fn + '.json'
  await writeJsonDataToFilename(filename, json)
}

async function go() {
  await writeFavories()
}

go()
