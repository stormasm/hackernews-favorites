var redis = require('redis')
//import favids from './../../data/in/fvid.json'
import favids from './../../data/in/fvid190124.json'
import { writeJsonDataToFilename } from '../util/file-util'

import { saddBig } from './../redis/writeUtils'

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
  let client = redis.createClient()
  ids.forEach(function(item) {
    saddBig(client, keyname, item)
  })
  client.quit()
}

async function go() {
  await processIdAry(favids)
}

go()
