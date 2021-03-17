/* eslint-disable linebreak-style */
import GameSavingLoader from './GameSavingLoader.js';

export default function async() {
  return GameSavingLoader.load().then(((result) => JSON.parse(result)
  ));
}
