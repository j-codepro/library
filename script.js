// Manage the modal
const addBook = document.querySelector('.add');
const modal = document.querySelector('.modal-add');

function modalAppear() {
    addBook.addEventListener('click', () => {
        modal.style.display = 'block';
    })
}
addBook.onclick = modalAppear();

function closeModal() {
    modal.style.display = 'none';
    clearFields();
}

window.onclick = (e) => {
    if (e.target === modal) {
        closeModal();
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeModal();
    }
};


// Constructor and Library
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const myLibrary = [];
myLibrary.forEach((book) => createBook(book));


// Clear the form after submit
function clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    // Checkbox unchecked by default
    const read = document.querySelector('#read');
    if(read.checked === true) {
        read.checked = false;
    }
}


// Add a book with the form submit
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read');
    // Instatiate book
    const book = new Book(title, author, pages, read);
    modal.style.display = 'none';
    createBook(book);
    clearFields();
});


function createBook(book) {
    const list = document.querySelector('.container');
    const card = document.createElement('div');
    card.className = 'card';
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const pPages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    pTitle.innerHTML = `${book.title}`;
    pAuthor.innerHTML = `${book.author}`;
    pPages.innerHTML = `${book.pages}`;
    removeBtn.innerHTML = '&times';

    // Check if it's read or not then style change;
    if(read.checked == true) {
        readBtn.innerHTML = 'Read';
    } else {
        readBtn.innerHTML = 'Not read';
        readBtn.style.background = 'rgb(187, 116, 116)';
    };

    pTitle.classList.add('book-title');
    readBtn.classList.add('read-button');
    removeBtn.classList.add('remove-button');

    card.appendChild(pTitle);
    card.appendChild(pAuthor);
    card.appendChild(pPages);
    card.appendChild(readBtn);
    card.appendChild(removeBtn);

    list.appendChild(card);

    myLibrary.push(book);

    // Toggle read button to unread and inversely
    readBtn.addEventListener('click', () => {
        if(readBtn.innerHTML === 'Read') {
          readBtn.innerHTML = 'Not read';
          readBtn.style.background = 'rgb(187, 116, 116)';
        } else {
          readBtn.innerHTML = 'Read';
          readBtn.style.background = '#8aad61';
        }
    });

    removeBtn.addEventListener('click', () => {
        card.remove();
        myLibrary.splice(myLibrary.indexOf(book), 1)
    });

}

