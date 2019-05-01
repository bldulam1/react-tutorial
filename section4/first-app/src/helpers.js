/**
 *
 * @param {string[]} items
 */
const choice = items => {
  const itemIndex = Math.floor(items.length * Math.random());
  return items[itemIndex];
}


/**
 * 
 * @param {string[]} items 
 * @param {string} item 
 */
const remove = (items, item) => {
  return items.filter(itm => itm !== item)
}


export {choice, remove}