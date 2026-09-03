// --- Starter JavaScript Code ---

// book class with type annotation
class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// Function with type annotation
function displayBook(book: Book): void {
    const bookList = document.getElementById("book-list");
    // Handle the case where bookList might be null
    if (bookList) {
        const bookDiv = document.createElement("div");
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p>By ${book.author}, ${book.year}</p>
        `;
        bookList.appendChild(bookDiv);
    }
}

// Create some book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

// Display the books on the webpage
displayBook(book1);
displayBook(book2);

// Creating review interface
interface Review {
    bookId: number;
    rating: number;
    comment: string;
}


// Creating review functionality
const reviews: Review[] = [];

function addReview(bookId: number, rating: number, comment: string): void {
    const review: Review = {
        bookId: bookId,
        rating: rating,
        comment: comment
    };
    reviews.push(review);
}
