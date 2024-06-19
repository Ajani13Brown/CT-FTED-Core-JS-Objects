//Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

class Book{
    constructor(title, author , pages){
        this.title = title;
        this.author = author;
        this.pages = pages;

        
    }
}
// Task 2: Implement a method within the Book object to display book information.
    printInfo=(book)=>{console.log(`Title: ${this.title}, Author: ${this.author} Pages: ${this.pages}.`)};


// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.
  const library = []  

const addBook = (title, author, pages) => {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
    console.log(library)
};

addBook("Dune","Frank Herbert",250)

const searchTitle = (title) => {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
};

const searchAuthor = (author) => {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
};
console.log(searchAuthor("Frank Herbert"))


/* Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages 
and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.*/

const filterBooks = () => {
    return library.filter(book => book.pages > 100);
};

const addPrefix = () => {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
};

console.log(addPrefix())
