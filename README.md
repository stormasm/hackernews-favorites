
```
yarn
yarn run s1
```

To make changes to the code in **src/json/writeFile.js** change these 2 parameters

```
const numofpages = 1
const offset = 1
```

Through this ID on Dec 6, 2020   
https://news.ycombinator.com/item?id=25323090

Do n runs to get through the whole data set where numofpages always equals 100 and the offset slowly goes down to take care of overlap.
```
numofpages = 100
offset = {1, 98, 196, 294, 392, 490}
```

Part of this repo is a fork of
[hacker-news-favorites-api](https://github.com/reactual/hacker-news-favorites-api)

This repo can be used with
[rust-hackernews](https://github.com/stormasm/rust-hackernews)
to make it easier to create a complete set of favorites
by combining smaller favorite id files using the redis
set as a way to guarantee uniqueness.
