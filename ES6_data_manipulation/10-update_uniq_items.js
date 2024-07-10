// function named updateUniqueItems that returns an updated map for all items
// with initial quantity at 1.

function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [itemName, itemQuantity] of groceriesMap.entries()) {
    if (itemQuantity === 1) {
      groceriesMap.set(itemName, 100);
    }
  }
}

export default updateUniqueItems;
