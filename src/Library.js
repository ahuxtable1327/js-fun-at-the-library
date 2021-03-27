
function createLibrary(name, shelves) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
  return library;
}

function addBook(library, book) {
  return library.shelves[book.genre].push(book);
}

function checkoutBook(library, title, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++ ) {
    var book = library.shelves[genre][i]
    if (book.title === title) {
    library.shelves[genre].splice(i,1)
      return `You have now checked out ${title} from the ${library.name}`
    }
  } return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}
//
    // } else {
    //   library.shelves[genre].splice(genre[i].title,1)
    // }
//   }
// }



//     } else {
//     }
//   }
// }
// if ([genre[i]].includes(title)) {
// if (genre.title !== library.shelves.title){
// } else {

// library --> shelves --> [book.genre].splice (genre[i].title)

// push a book object into the fantasy
// shelf array in the shelves object in the library object
// var genre = [];
  // for (var i = 0; i < genre.length < i++) {
  //   genre.push(library.shelves.fantas)


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
