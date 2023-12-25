let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

document.addEventListener("DOMContentLoaded", function () {
    let newBookbtn = document.querySelector("#new-book-btn");
    newBookbtn.addEventListener("click", function () {
        let newBookForm = document.querySelector("#new-book-form");
        newBookForm.style.display = "block";
    });
});
