/**
 * Перевіряє, чи дві картки співпадають.
 * @param {Card} card1 - Перша картка
 * @param {Card} card2 - Друга картка
 * @returns {boolean} - true, якщо картки однакові
 */
function isMatch(card1, card2) {
  return card1.id === card2.id;
}
