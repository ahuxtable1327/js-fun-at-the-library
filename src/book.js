function createTitle(bookTitle) {
  return (`The ${bookTitle}`);
};


function buildMainCharacter(characterName, age, preferredPronouns){
  var character = {
    name: characterName,
    age: age,
    pronouns: preferredPronouns,
  }
  return character;
};

function saveReview() {
  var reviews = [];
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
