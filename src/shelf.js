function shelfBook (book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      shelf.splice([i],1);
    }
  }
}

function listTitles(shelf) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.join(", ")
}

function searchShelf(shelf, isTrue) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.includes(isTrue);
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
