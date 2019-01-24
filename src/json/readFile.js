import favids from './../../data/in/fvid.json'
import { writeJsonDataToFilename } from '../util/file-util'

import { sadd } from './../redis/writeUtils'

const fn = 'test'
const keyname = 'favoriteset'

async function readFavoritesFileTest() {
  let json = JSON.stringify(favids)
  let filename = './data/out/' + fn + '.json'
  await writeJsonDataToFilename(filename, json)
}

async function readFavoritesFileTest() {
  let json = JSON.stringify(favids)
  let filename = './data/out/' + fn + '.json'
  await writeJsonDataToFilename(filename, json)
}

function processIdAry(ids) {
  ids.forEach(function(item) {
    sadd(keyname, item)
  })
}

async function go() {
  await processIdAry(favids)
}

go()
