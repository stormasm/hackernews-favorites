
### Step 1

```
yarn
yarn run s1
```

To make changes to the code in **src/json/writeFile.js** change these 2 parameters

```
const numofpages = 300
const offset = 295
```

Do n runs to get through the whole data set where numofpages always equals 300 and the offset slowly goes down to take care of overlap.

Part of this repo is a fork of
[hacker-news-favorites-api](https://github.com/stormasm/hacker-news-favorites-api)

### Step 2

The output of step 1 is a [set of json files](https://github.com/stormasm/hackernews-favorites-archive/tree/master/2020/in)
This repo can be used with
[this program](https://github.com/stormasm/rust-hackernews/blob/master/hn00/examples/ex01.rs) to make it easier to create a complete set of favorites
by combining smaller favorite id files using the redis
set as a way to guarantee uniqueness.

### Step 3

Then the data which is sitting in a redis set has to be moved to a json
file using [this rust program](https://github.com/stormasm/redsled/blob/master/examples/rediset-to-file.rs)

### Changelog

Through this ID on Dec 6, 2020   
https://news.ycombinator.com/item?id=25323090
