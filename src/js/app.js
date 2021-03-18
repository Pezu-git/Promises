/* eslint-disable linebreak-style */
import GameSavingLoader from './GameSavingLoader.js';

export default function prom() {
  return GameSavingLoader.load().then(((result) => JSON.parse(result)
  )).catch(((error) => {
    throw new Error(error);
  }));
}
