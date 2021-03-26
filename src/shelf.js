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
// sciFiShelf[i].title



module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
