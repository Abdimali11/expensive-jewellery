// Good Luck 💪🏾

  function findMostExpensiveJewelry(jewelryPieces) {
    let maxPrice = 0;
    let mostExpensiveJewelry = "";
  
    for (let piece in jewelryPieces) {
      if (jewelryPieces.hasOwnProperty(piece)) {
        const price = jewelryPieces[piece];
  
        if (price > maxPrice) {
          maxPrice = price;
          mostExpensiveJewelry = piece;
        }
      }
    }
  
    return `The most expensive one is the ${mostExpensiveJewelry}.`;
  }
  const jewelryPieces = {
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  };

  const result = findMostExpensiveJewelry(jewelryPieces);
 
  console.log(result);
 