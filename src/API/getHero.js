import axios from "axios";

const MARVEL_URI = " http://gateway.marvel.com/v1/public/characters?";
const API_KEY = "apikey=b6b5b9378603470598a45c4cd11b45a2&";
const HASH = "ts=1&hash=a3b3cc35c89a552e95a9a0c17290bdb1&name=";

const getSpecificHero = async heroName => {
  const hero = await axios.get(MARVEL_URI + API_KEY + HASH + heroName);
  const image =
    hero.data.data.results[0].thumbnail.path +
    "." +
    hero.data.data.results[0].thumbnail.extension;
  return image;
};

export { getSpecificHero };
