/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// --- Starter JavaScript Code ---
// Task 1 & 2: Convert Book function to TypeScript class with type annotations
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
// Task 1: Add type annotations to function parameters and return types
function displayBook(book) {
    var bookList = document.getElementById("book-list");
    // Handle the case where bookList might be null
    if (bookList) {
        var bookDiv = document.createElement("div");
        bookDiv.innerHTML = "\n            <h2>".concat(book.title, "</h2>\n            <p>By ").concat(book.author, ", ").concat(book.year, "</p>\n        ");
        bookList.appendChild(bookDiv);
    }
}
// Create some book objects
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
var book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
// Display the books on the webpage
displayBook(book1);
displayBook(book2);
// Task 4: Add a function to add a review to a book
var reviews = [];
function addReview(bookId, rating, comment) {
    var review = {
        bookId: bookId,
        rating: rating,
        comment: comment
    };
    reviews.push(review);
}
// Task 5: Add type annotations to the new variables and functions
// (Type annotations already added above)

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wcm9qZWN0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyAtLS0gU3RhcnRlciBKYXZhU2NyaXB0IENvZGUgLS0tXG4vLyBUYXNrIDEgJiAyOiBDb252ZXJ0IEJvb2sgZnVuY3Rpb24gdG8gVHlwZVNjcmlwdCBjbGFzcyB3aXRoIHR5cGUgYW5ub3RhdGlvbnNcbnZhciBCb29rID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgeWVhcikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIH1cbiAgICByZXR1cm4gQm9vaztcbn0oKSk7XG4vLyBUYXNrIDE6IEFkZCB0eXBlIGFubm90YXRpb25zIHRvIGZ1bmN0aW9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlc1xuZnVuY3Rpb24gZGlzcGxheUJvb2soYm9vaykge1xuICAgIHZhciBib29rTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vay1saXN0XCIpO1xuICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBib29rTGlzdCBtaWdodCBiZSBudWxsXG4gICAgaWYgKGJvb2tMaXN0KSB7XG4gICAgICAgIHZhciBib29rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm9va0Rpdi5pbm5lckhUTUwgPSBcIlxcbiAgICAgICAgICAgIDxoMj5cIi5jb25jYXQoYm9vay50aXRsZSwgXCI8L2gyPlxcbiAgICAgICAgICAgIDxwPkJ5IFwiKS5jb25jYXQoYm9vay5hdXRob3IsIFwiLCBcIikuY29uY2F0KGJvb2sueWVhciwgXCI8L3A+XFxuICAgICAgICBcIik7XG4gICAgICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tEaXYpO1xuICAgIH1cbn1cbi8vIENyZWF0ZSBzb21lIGJvb2sgb2JqZWN0c1xudmFyIGJvb2sxID0gbmV3IEJvb2soXCJUaGUgSG9iYml0XCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTkzNyk7XG52YXIgYm9vazIgPSBuZXcgQm9vayhcIlRoZSBMb3JkIG9mIHRoZSBSaW5nc1wiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5NTQpO1xuLy8gRGlzcGxheSB0aGUgYm9va3Mgb24gdGhlIHdlYnBhZ2VcbmRpc3BsYXlCb29rKGJvb2sxKTtcbmRpc3BsYXlCb29rKGJvb2syKTtcbi8vIFRhc2sgNDogQWRkIGEgZnVuY3Rpb24gdG8gYWRkIGEgcmV2aWV3IHRvIGEgYm9va1xudmFyIHJldmlld3MgPSBbXTtcbmZ1bmN0aW9uIGFkZFJldmlldyhib29rSWQsIHJhdGluZywgY29tbWVudCkge1xuICAgIHZhciByZXZpZXcgPSB7XG4gICAgICAgIGJvb2tJZDogYm9va0lkLFxuICAgICAgICByYXRpbmc6IHJhdGluZyxcbiAgICAgICAgY29tbWVudDogY29tbWVudFxuICAgIH07XG4gICAgcmV2aWV3cy5wdXNoKHJldmlldyk7XG59XG4vLyBUYXNrIDU6IEFkZCB0eXBlIGFubm90YXRpb25zIHRvIHRoZSBuZXcgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnNcbi8vIChUeXBlIGFubm90YXRpb25zIGFscmVhZHkgYWRkZWQgYWJvdmUpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=