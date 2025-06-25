const myLibrary = [];

function Book(title, author, number, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.number = number;
    this.read = Boolean(read);
  // the constructor...
}

function addBookToLibrary(title, author, numberOfPages, isRead) {
  // take params, create a book then store it in the array

    const newBook = new Book(title, author, numberOfPages, isRead);
    myLibrary.push(newBook);
    console.log(myLibrary);
    
}


// button to activate the form
const btn = document.querySelector("#add"); 
btn.addEventListener("click", () => {
    const form = document.querySelector("#add-book");
    form.classList.remove("hidden");



});

const submit = document.querySelector(".submit-button");
submit.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const numberOfPages = parseInt(document.querySelector("#number-of-pages").value);
    const isRead = document.querySelector("#read").checked;
    addBookToLibrary(title, author, numberOfPages, isRead);

    
});




