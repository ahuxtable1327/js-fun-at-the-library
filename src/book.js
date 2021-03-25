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

function saveReview(newReview, reviews) {
  for (var i = 0; i <= reviews.length; i++) {
    if (reviews.indexOf(newReview) === -1) {
      reviews.push(newReview);
      return reviews;
    }
  }
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
