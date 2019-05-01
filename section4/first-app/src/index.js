import foods from './foods';
import {remove, choice} from './helpers';

let fruit = choice(foods);
console.log(`I'd like one ${fruit} please.`);
console.log(`Here you go ${fruit}.`);

let remainingFruits = remove(foods, fruit);
console.log(`Remaining fruits: ${remainingFruits.length}`);
