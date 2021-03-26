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

function calculatePageCount(bookTitle) {
  bookPageCount = bookTitle.length * 20;
  return bookPageCount;
}

function writeBook(bookTitle, mainCharacter, genre){
  var book = {
    title: bookTitle,
    mainCharacter: mainCharacter,
    genre: genre,
    pageCount: bookTitle.length * 20,
  }
  return book
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
